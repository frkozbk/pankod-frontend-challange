import {sortByYearDesc} from './sortByYearDesc'
import { sortByYearAsc } from "./sortByYearAsc";
import { sortByTitleDesc } from "./sortByTitleDesc";
import {sortByTitleAsc} from "./sortedByTitleAsc"
import { sortByDefault } from './sortByDefault';
 const sort = (data,categories,sortType) => {
    debugger
    switch (sortType) {
        case "SORT_BY_YEAR_DESC":
            return sortByYearDesc(data,categories)
        case "SORT_BY_YEAR_ASC":
            return sortByYearAsc(data,categories)
        case "SORT_BY_TITLE_DESC":    
            return  sortByTitleDesc(data,categories)
        case "SORT_BY_TITLE_ASC":
            return sortByTitleAsc(data,categories)
        default:
            return sortByDefault(data,categories)
    }
}
export default sort
