export const sortByYearAsc = (data,categories) => {
    let filteredData=data
        .filter(item=>{
          
          return item.programType===categories
        })
    
    let sortedData = filteredData.sort((a,b) =>{
        var first = a.releaseYear
        var second = b.releaseYear
        
        return second-first;
          
    })
    return sortedData
}