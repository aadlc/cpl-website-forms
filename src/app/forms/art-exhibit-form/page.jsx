import ArtExhibitForm from '@components/ArtExhibitForm'
import { getToken, getListOfBranches } from '@utils/actions'

export default async function  ArtExhibitPage() {
  const response = await getToken()
  if (!response.success){
    // TODO: handle response.success equals false
  }
  
  let locations
  if (response.success){
    // TODO: DO NOT expose token
    const responseListOfBranches = await getListOfBranches(response.data[0].token)
    if (responseListOfBranches.success){ 
      // TODO: handle responseListOfBranches.success equals false
    }
    if (responseListOfBranches.success){
      locations = responseListOfBranches.data
    }

  }
  

  return <ArtExhibitForm locations={locations} />

}