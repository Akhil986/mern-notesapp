export function formatedate(date){
return date.toLocaleDateString("en-US",{
    month:"short",
    day:"numeric",
    year:"numeric",
});
}