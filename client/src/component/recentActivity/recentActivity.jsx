export default function RecentActivity(){
    const recent=['chatbot','jpg to png']
    return(
        <>
        <div className="activity">
            <ul className="activity list">
                {
                recent.map((index,data)=>{
                    <li key={index}>{data}</li>
                })}
            </ul>
        </div>
        </>
        
    )
}