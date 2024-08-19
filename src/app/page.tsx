export default function Home() {
  
return (

    <main>
      <div className="relative h-screen bg-gray-200 overflow-hidden">
      <div className="absolute top-40 left-20 bg-blue-500 rounded-full w-60 h-24"></div>
      <div className="absolute top-1/2 right-10 bg-red-200 rounded-full w-24 h-60"></div>
      <div className="absolute top-1/7 right-10 bg-red-400 rounded-full w-24 h-60"></div>
      <div className="absolute top-320 right-348 bg-red-400 rounded-full w-24 h-40"></div>
      <div className="absolute top-40 right-40 bg-blue-500 rounded-full w-24 h-40"></div>
      
      <div className="absolute bottom-40 left-1/1 bg-green-300 rounded-full w-40 h-40"></div>
      <h1 className="text-center mt-10 text-black h-10">TECHFUTURE</h1>
    
      <div className="h-screen bg-gradient-to-r from-black to-green-600">
     
      <div className="h-screen flex justify-center items-center bg-blue-1000 px-5">

      <div className="bg-white- p-12 rounded-lg w-96  max-w-full flex justify-center items-center flex-col gap-2">

        <div>
          <img src="" alt="" />
        </div>

      
          <h3 className="text-xl h-20 mb-7 flex-col text-green-300 ">
            TechFuture
           
            um novo jeito inteligente
          
          </h3>
        


       <h1 className="font-bold text-xl mb-7 bg-primary w-full flex rounded-lg justify-center items-center flex-col text-white">Faça seu Login</h1>

       <input
        type="email" 
        placeholder="Email"
        className="input input-primary w-full"/>

       <input
        type="password" 
        placeholder="Senhas "
        className="input input-primary w-full"/>

       <button className="btn btn-primary w-full">Enviar</button>

      </div>
      

      <div className="h-screem flex justify-center items-center bg-gray-200 p-12 w-96 max-full flex justify-center flex-col gap-2 rounded-lg">
     
        <h2 className="bg-blue-500 p-2 flex-col gap-6 max-w-full rounded-lg text-white">Bem Vindo</h2>
        <p className="text-black font-bold">Na TechFuture 
 acreditamos que a inovação transforma o mundo. 
Fundada em 2024, nossa missão é simplificar a vida das pessoas por meio da tecnologia. 
Somos uma startup de soluções inteligentes, focada em desenvolver produtos que combinam design
 intuitivo e tecnologia de ponta para resolver desafios diários com eficiência e criatividade.

        </p>
      </div>
      </div>
      </div>
      </div>
 
    </main>
  )
}