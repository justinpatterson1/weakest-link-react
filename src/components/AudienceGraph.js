import React,{useState,useContext} from 'react'
import { VictoryPie } from "victory-pie";
import ResultButtonContext from '../context/ResultButtonContext';
import AudienceGraphContext from '../context/AudienceGraphContext';
import GraphVisibilityContext from '../context/GraphVisibilityContext';


const AudienceGraph = () => {
    
    const {graphData}= useContext(AudienceGraphContext)
    const {setGraphVisibility} = useContext(GraphVisibilityContext)
    
        
    return (
        <div id="audienceGraphModal" onClick={()=>{setGraphVisibility({visibility:false})}}>
        
        <div class="graphModalBody grid col-1">
            <div class="graphModalContent grid col-1">
            
                    <div id="pieChart" className="grid col-1" >
                    <VictoryPie
                        data={graphData}
                        colorScale={["blue", "yellow", "red","purple"]}
                        radius={75}
                        
                    />
                    </div>
               
            </div>
        </div>
    </div>
    )
}

export default AudienceGraph
