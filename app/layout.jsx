
export async function generateMetadata({ params }, parent) { 
  return {
    title: params.title,
    description: 'News at the moment',
    charset: "utf-8"
  }
}
 
import './App.css'
import Nav from './components/navbar/nav'
import ThemeRegistry from "./Themereg"

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <head>
      </head>
        <body >
          <div id="root">
            <Nav/>
            <ThemeRegistry options={{ key: 'joy' }}>
              {children}
            </ThemeRegistry>
          </div>
          </body>
    </html>

  )
}
