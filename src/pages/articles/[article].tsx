import Link from "next/link"
import path from "path";
import fs from 'fs'
import { remark } from 'remark'
import html from 'remark-html'
import DefaultLayout from "@/layouts/default.layout";
import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from 'next'
import { ReactElement } from "react";

export default function ArticlePage({ postData } : any)
{
  // console.log(postData);
  
  if (!postData?.contentHtml) {
    return <DefaultLayout>
      <div>Article not found.</div>
    </DefaultLayout>
  }

  return (
    <div>
      <div>
        <Link href="/">&laquo; Back home</Link>
      </div>
      <div className="mt-30">
        {/*<div className="fs-xxl">ARTICLE PAGE</div>*/}
        <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}></div>
      </div>
    </div>
  )
}

ArticlePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <DefaultLayout>{page}</DefaultLayout>
  );
}

export async function getPostData(article: any) {
  const postsDirectory = 'src/articles'
  const fullPath = path.join(postsDirectory, `${article}.md`);

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matter = require('gray-matter');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    article,
    contentHtml,
    ...matterResult.data,
  };
}

export const getStaticProps = async ({ params }: any) => {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.article);

  return {
    props: {
      postData,
    },
  };
}

export const getStaticPaths = (async () => {
  return {
    paths: [
      {
        params: {
          article: 'why-i-use-sublime',
        },
      }, // See the "paths" section below
    ],
    fallback: false, // false or "blocking"
  }
}) satisfies GetStaticPaths