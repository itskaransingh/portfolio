import Link from "next/link"

type Props = {}

const Contact = (props: Props) => {
  return (
    <section id="contact" className="section items-center lg:min-h-[650px]  flex  flex-col">
        <h2 className="section-heading">Contact</h2> 
        <div className="flex flex-col text-center justify-center gap-4 items-center">
          <div className="text-secondary text-3xl">Let's be awesome together!</div>
          <div className="line-clamp-4 max-w-[500px]  mx-auto">
          As a dev, I am driven by my love for coding and my desire for new challenges. If you have opportunities for collaboration or want to build something amazing, don't hesitate to contact me!
          </div>
          <button  className="bg-secondary animate-pulse rounded-3xl px-10 text-lg py-3">
            <Link href={'mailto:karanrsingh2662006@gmail.com'}>
             Get In Touch !
            </Link>
        </button>
        </div>   
    </section>
  )
}

export default Contact