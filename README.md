
# KONEECT

Video calling platform made by students of Ideal Institute of Enginnering as their minor project of 3rd Year. The group consist of 4 students - Sounak Chakraborty, Barun Karmakar, Supratik Chakraborty and Biju Kar.


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd (project_location)
```

Install dependencies

```bash
  npm install nodejs
  npm install nextjs
  npx shadcn-ui@latest init
  npx shadcn-ui@latest add button
  npx shadcn-ui@latest add sheet
  npm install @clerk/nextjs
  npx shadcn-ui@latest add dialog
  npm install @stream-io/video-react-sdk
  npm install @stream-io/node-sdk
  npx shadcn-ui@latest add textarea
  npx shadcn-ui@latest add dropdown-menu
  npm install react-datepicker
  npm i --save-dev @types/react-datepicker
  npx shadcn-ui@latest add input
```

.env.local

```
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY= **INSERT**
  CLERK_SECRET_KEY= **INSERT**
  
  NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
  NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
  
  NEXT_PUBLIC_STREAM_API_KEY= **INSERT**
  STREAM_SECRET_KEY= **INSERT**
  
  NEXT_PUBLIC_BASE_URL=localhost:3000 (for local machine it is localhost:300
  but in case of hosting change it to the domain name you choose)
```

Extensions of VSCode (Optional)

```
  ES7+ React/Redux/React-Native snippets - by *dsznajder
  Tailwind CSS Intellisense - by *Tailwind Labs
  vscode-icons - by *VSCode Icons Team
```

Run

```bash
  npm run dev
```


