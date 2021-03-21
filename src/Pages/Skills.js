import React from 'react'
import SkillsCom from '../Components/SkillsCom'
import Title from '../Components/Title'

const Skills = () => {
    return (
        <div>
            <Title title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsCom skill={'ReactJS'} progress={'60%'} width={'60%'} />
                <SkillsCom skill={'Material UI'} progress={'60%'} width={'60%'}
                    progress={'70%'} />
                <SkillsCom skill={'Javascript'} progress={'60%'} width={'60%'}/>
                <SkillsCom skill={'HTML'}
                progress={'80%'}/>
                <SkillsCom skill={'CSS'}
                progress={'80%'} />
                <SkillsCom skill={'C++'}
                progress={'80%'} />
                <SkillsCom skill={'SQL'}
                    progress={'30%'} />
                <SkillsCom skill={'Python'}
                    progress={'30%'} />
                <SkillsCom skill={'Ubuntu'}
                    progress={'80%'} />
                
            </div>
        </div>
    )
}

export default Skills
