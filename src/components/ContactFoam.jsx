export default function ContactFoam() {
  return (
    <>
      <div className="my-16 lg:mx-24 mx-8 text-center ">
        <h1 className="text-3xl font-bold">Send a message to us!</h1>
        <form className="lg:pt-12 pt-8 flex flex-col lg:w-[50%] w-[90%]  m-auto gap-3">
          <input
            type="text"
            placeholder="Name"
            className="h-12 px-4 rounded-md border-taupe-800 border"
          />
          <input
            type="email"
            placeholder="Email"
            className="h-12 px-4 rounded-md border-taupe-800 border"
          />
          <input
            type="text"
            placeholder="Subject"
            className="h-12 px-4 rounded-md border-taupe-800 border"
          />
          <textarea
            rows="7"
            cols="30"
            placeholder="Message"
            className="border h-12 pt-1 px-4 rounded-md border-taupe-800"
          ></textarea>
          <button className="w-full md:w-auto py-3 px-6 bg-gray-200 text-xl font-medium rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#151516] hover:text-white active:bg-[#151516] active:text-white">
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}
