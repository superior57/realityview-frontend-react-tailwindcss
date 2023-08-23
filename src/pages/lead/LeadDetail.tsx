import { useParams } from "react-router-dom"
import CreateNewLeadForm from "@/components/mainComponents/CreateNewLeadForm"
const LeadDetail = () => {
    const params = useParams()
    return (
        <>
            {params.id === 'new' && <CreateNewLeadForm />}
            {params.id !== 'new' && <div>
                LeadDetail
            </div>}
        </>
    )
}

export default LeadDetail