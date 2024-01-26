import React from 'react'
import SkillBanner from '../../components/Skills/SkillBanner'
import AllSkills from '../../components/Skills/AllSkills'
// import Tools from '../../components/Skills/Tools'

const Skills = () => {
    return (
        <div className='lg:mx-0 mx-[24px]'>
            <SkillBanner />
            <AllSkills />
            {/* <Tools /> */}
        </div>
    )
}

export default Skills