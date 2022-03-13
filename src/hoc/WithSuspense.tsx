import React, { ComponentType } from 'react'

export const WithSuspense = (Component: ComponentType) => {
    return (props: any) => {
        return <React.Suspense fallback={<div>Loading ...</div>}>
            <Component {...props} />
        </React.Suspense>
    }
}