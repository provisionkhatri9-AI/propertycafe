type AreaAndType=
    {
        area:string;
        type:string
    }


type AreaAndHousing ={
    areaAndHousing : AreaAndType[]
}

export default  function AreaAndHousing({
    areaAndHousing
} : AreaAndHousing){
    return(
        <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-x-15 gap-y-2 small-greytext">
                {areaAndHousing.map((item, index) => (
                    <p
                    key={index}
                    className=" cursor-pointer hover-lift"
                    >
                    {item.type} is for sale in {item.area}
                    </p>
                ))}
            </div>
    )
}