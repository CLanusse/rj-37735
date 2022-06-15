import React from 'react'


const MemoComp = React.memo(() => {
    
    console.log("Me rendericé")

    return (
        <div>
            <h4>Soy un Memo {":)"}</h4>
        </div>
    )
})

export default MemoComp