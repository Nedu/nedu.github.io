---
path: "/intro-to-react-query"
date: "2021-07-28"
title: "Introduction to React Query"
author: "Nedu Robert"
---

One of the challenges, engineers face when building an application is state management. React Query is a server state management library that manages the fetching, caching, synchronizing, and updating of server state in React and React Native applications. What is server state? Server state is state that is persisted in a remote location that you have no control over. In general, traditional state management libraries are good to handle client state but are not equipped to efficiently handle server state, this is where react query excels. The underlying idea here is that UI or client state is different from server or async state and should be separated.

Alright, so how do we start utilizing react query to get the benefits? The first thing we need to do is install react query. React query can be installed using npm yarn or via a CDN.

```
npm i react-query

yarn add react-query 

<script src="https://unpkg.com/react-query/dist/react-query.production.min.js"></script>
```


## Devtools

It really helps to use the React Query Dev Tools while getting started. Here’s how to get them setup (we will use them in this next section). By default, the dev tools are excluded from production builds. To begin working with the dev tools you just need to import it from the react-query library. No additional installs are required.

```javascript
import { ReactQueryDevtools } from 'react-query/devtools'
```

Dev tools can be displayed in either floating mode or embedded mode. Floating Mode mounts the dev tools as a fixed, floating element in the application and provides a toggle in the corner of the screen to show and hide the dev tools that will be stored and remembered in localStorage across reloads. Embedded Mode embeds the dev tools as a regular component in the application and can be styled.

```javascript
import { ReactQueryDevtools } from 'react-query/devtools'
 
 function App() {
   return (
     <QueryClientProvider client={queryClient}>
       {/* The rest of your application */}
       <ReactQueryDevtools initialIsOpen={false} />
     </QueryClientProvider>
   )
 }
 ```
<p align = "center">Floating Mode</p>

```javascript
import { ReactQueryDevtoolsPanel } from 'react-query/devtools'
 
 function App() {
   return (
     <QueryClientProvider client={queryClient}>
       {/* The rest of your application */}
       <ReactQueryDevtoolsPanel style={styles} className={className} />
     </QueryClientProvider>
   )
 }
 ```
<p align = "center">Embedded Mode</p>

React Query has three core concepts to keep in my which are queries, mutations, and query invalidation. The react query documentation defines queries as declarative dependencies on an asynchronous source of data that is tied to a unique key. Queries are used for fetching data from a server. Mutations are usually used for creating, updating, and deleting data or performing server side-effects. Queries can be marked as stale and be refetched manually using the invalidateQueries method. The next post in this series would go into more depth on queries.