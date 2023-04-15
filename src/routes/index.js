import { lazy } from 'react';
import { Route } from 'react-router-dom';

const routes = [
    {
        path: "",
        element: lazy(() => import("../Components/MainLayout/MainLayout")),
        nested: [
            {
                path: "userProfile/:userId",
                element: lazy(() => import("../Modules/UserProfile/Page/UserProfile")),
            },
            {
                path: "jobs",
                element: lazy(() => import("../Modules/JobList/Page/JobList")),
            },

            {
                path: "jobs/:jobId",
                element: lazy(() => import("../Modules/JobDetail/Page/JobDetail")),
            },
        ]
    },

    {
        path: "admin",
        element: lazy(() => import("../Admin/index")),
        nested: [
            {
                path: "addusers",
                element: lazy(() => import("../Admin/components/AddUsers/AddUsers")),
            },
            {
                path: "editusers",
                element: lazy(() => import("../Admin/components/EditUsers/EditUsers")),
            },

        ]
    }
];

const renderRoutes = () => {
    //map duyệt mảng, nhớ return để trả về mảng mới
    return routes.map((route) => {
        if (route.nested) {
            return <Route key={route.path} path={route.path} element={<route.element />}>
                {/* Giấu ngoặc nhọn là renderingElement */}
                {route.nested.map((item) => {
                    return <Route key={item.path} path={item.path} element={<item.element />} />
                })}
            </Route>

        } else {
            return <Route key={route.path} path={route.path} element={<route.element />} />
        }
    })
}

export default renderRoutes