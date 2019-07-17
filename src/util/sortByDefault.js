export const sortByDefault = (data,category)=>{
    let filteredData=data
        .filter(item=>{
          
          return item.programType===category && item.releaseYear>=2010
        })
    
    let sortedData = filteredData.sort((a,b) =>{
        var first = a.title.toLowerCase()
        var second = b.title.toLowerCase()
        let comparison = 0;
        if (first > second) {
          comparison = 1;
        } else if (first < second) {
          comparison = -1;
        }
        return comparison;
          
    })
    let slicedData=sortedData.slice(0,21)
    return slicedData
}