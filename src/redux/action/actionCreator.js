export function concatPageAndType( pageName ){
    return function( type,options ){
        return {
            type:pageName+"_"+type,
            ...options
        }
    }
}