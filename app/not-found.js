import Link from 'next/link'
 
export default function NotFound() {
  return (
    <>
      <div>
        {/* to use swap with index.html and invalidate web cache */}
        <title>site maintenance</title>
        <style dangerouslySetInnerHTML={{__html: "\n  body {\n    text-align: center;\n    padding: 20px;\n  }\n\n  @media (min-width: 768px) {\n    body {\n      padding-top: 150px;\n    }\n  }\n\n  h1 {\n    font-size: 50px;\n  }\n\n  body {\n    font: 20px helvetica, sans-serif;\n    color: #333;\n  }\n\n  article {\n    display: block;\n    text-align: left;\n    max-width: 650px;\n    margin: 0 auto;\n  }\n" }} />
        <article>
          <h1>we’ll be back soon!</h1>
          <div>
            <p>
              sorry for the inconvenience but we’re performing some maintenance at the moment.we’ll be back online
              shortly!
            </p>
            <p>— the developer team</p>
          </div>
        </article>
      </div>
      <div>
        
        <Link href="/">Return Home</Link>
      </div>
 </>

  )
}