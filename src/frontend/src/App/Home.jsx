import { Text, Button } from '@fluentui/react-northstar';
import { useEffect, useState } from 'react';
import axios from 'axios'

export default function Home(props) {

    const [isOAIDeployed, setIsOAIDeployed] = useState(false)

    useEffect(() => {
        axios.get("/api/isdeployed").then(v => {
            setIsOAIDeployed(v.data.isDeployed)
        })
    }, [])

    const renderOAIOptions = () => {
        if (isOAIDeployed) {
            return (
                <>
                    |
                    <Button id="OPENAI_VIEWER" onClick={(e) => props.onClick(e)} text style={{ color: "rgb(0, 120, 212)" }} content="OpenAI Viewer" />
                    |
                    <Button id="VECTOR_SEARCH" onClick={(e) => props.onClick(e)} text style={{ color: "rgb(0, 120, 212)" }} content="OpenAI Vector Search Application" />
                </>
                
            
            )
        }
    }

    return (
        <div style={{ paddingLeft: "0px", paddingTop: "50px" }}>
            <Text weight="semibold" style={{ fontSize: "25px", display: "block", marginBottom: "20px" }}>Turigma Turbo</Text>


            <Text weight="semibold" style={{ fontSize: "18px", display: "block", marginBottom: "20px" }}>Set up your workflow</Text>
            {/* <div style={{display:"flex", paddingTop : "50px"}}> */}
            <Button id="CONFIGURE_PIPELINE" onClick={(e) => props.onClick(e)} text style={{ color: "rgb(0, 120, 212)", paddingLeft: "0px" }} content="Configure A New Workflow" />
            |
            <Button id="CURRENT_PIPELINE" onClick={(e) => props.onClick(e)} text style={{ color: "rgb(0, 120, 212)" }} content="View The Existing Workflow " />
            |
            <Button id="UPLOAD_DOCUMENTS" onClick={(e) => props.onClick(e)} text style={{ color: "rgb(0, 120, 212)" }} content="Upload Documents" />
            |
            <Button id="VIEW_INSIGHTS" onClick={(e) => props.onClick(e)} text style={{ color: "rgb(0, 120, 212)" }} content="Search Your Data" />
            {renderOAIOptions()}

            {/* </div> */}
        </div>

    )
}