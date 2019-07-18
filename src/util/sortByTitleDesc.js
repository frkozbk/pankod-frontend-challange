export const sortByTitleDesc = (data,categories ) =>{
    
    let filteredData=data.filter(item=>{
        return item.programType===categories
    })
    let sortedData = filteredData.sort((a,b) =>{
            var first = a.title.toLowerCase()
            var second = b.title.toLowerCase()
            let comparison = 0;
        if (first > second) {
          comparison = -1;
        } else if (first < second) {
          comparison = 1;
        }
        return comparison;
              
        })
        return sortedData
}