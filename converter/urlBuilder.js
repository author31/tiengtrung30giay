export default function customUrlBuilder(sanity_url, projectId, dataset){
    var fn = sanity_url.split("-").slice(1, 3).join("-")
    var ext = sanity_url.split("-").slice(-1)
    return `https://cdn.sanity.io/images/${projectId}/${dataset}/${fn}.${ext}`
}