/* React */
import React, { useState } from 'react'
import '../styles/globals.css'
/* React-Query */
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools';
/* Type */
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient())

  return (    
		<QueryClientProvider client={queryClient}>      
			<Hydrate state={pageProps.dehydratedState}>       
				<Component {...pageProps} />      
			</Hydrate>
      <ReactQueryDevtools initialIsOpen={true}/>
		</QueryClientProvider>  
	)
}

export default MyApp;