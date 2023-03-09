import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const {data,isLoading} = useQuery("posts",menuList)
  const [A,setA] = useState("")
  const handleConsole = (event:any) => {
    const { value } = event.currentTarget;
    console.log(value)
  }
  return (
    <div className={styles.container}>
     {isLoading ? <>1</> : <>{data.map((i:{id:number}) => <button onClick={handleConsole} value={i.id}>{i.id}</button>)}</>}
    </div>
  )
}

export default Home

export async function getServerSideProps() {
	const queryClient = new QueryClient()
	
	await queryClient.prefetchQuery('posts', menuList)

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	}
}

export const menuList = async () => {
  try {
    const { data } = await axios.get(
      `https://bobbykjh.github.io/subway/sandwich.json`
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};
