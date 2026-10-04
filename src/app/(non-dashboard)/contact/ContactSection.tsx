import { Button } from "@/components/ui/button";

const ContactSection = () => {
    return (
        <div className="m-10 border flex flex-col items-center justify-center w-full">
           <header>
            <h2 className="text-4xl font-bold mb-4 text-center  p-4">Contact PashPro</h2>
           </header>
           <div className="w-lg">
            <form action="#" method="post">
                <fieldset className="relative flex flex-col mb-4 gap-4 w-full">
                    <legend className="hidden">Fill the details below to talk to us </legend>
                    <p>All fields are compulsory</p>
                    <div className="">
                        <span className="flex flex-col">
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text" 
                                placeholder="e.g. John Doe"
                                id="name"
                                required={true}
                                className="border w-full p-2 white hover:bg-gray-100 focus:bg-gray-100 "
                                maxLength={35}
                            />
                        </span>
                    </div>
                    <div className="">
                        <span className="flex flex-col">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                placeholder="e.g. johndoe@email.com"
                                id="email"
                                required={true}
                                className="border p-2 white hover:bg-gray-100 focus:bg-gray-100 "
                                maxLength={35}
                                />
                        </span>
                    </div>
                    <div className="">
                        <span className="flex flex-col">
                            <label htmlFor="title">Title</label>
                            <input 
                                type="email" 
                                placeholder="Write title here"
                                id="email"
                                required={true}
                                className="border p-2 white hover:bg-gray-100 focus:bg-gray-100 "
                                maxLength={35}
                            />
                        </span>
                    </div>
                    <div className="">
                        <span className="flex flex-col">
                            <label htmlFor="message">Message</label>
                            <textarea 
                                placeholder="Write your message here..."
                                id="name"
                                required={true}
                                className="border p-2 white hover:bg-gray-100 focus:bg-gray-100"
                                rows={8}
                                />
                        </span>
                    </div>
                    <div className="">
                        <span className="flex flex-col hover:bg-gray-200">
                            <Button>Leave a message</Button>
                        </span>
                    </div>

                </fieldset>
            </form>

            </div>
        </div>
    )
}
export default ContactSection;