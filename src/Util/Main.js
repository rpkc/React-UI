import '../Style/Main.css';
//it will the body for every element
export default function Main(prop){
    switch(prop.type)
    {
        case "card":
            return(
                <main>
                    <div className='card'>
                        {prop.children}
                    </div>
                </main>
            );
        
        default:
            return(
                <main>
                    {prop.children}
                </main>
            );    
    }
}