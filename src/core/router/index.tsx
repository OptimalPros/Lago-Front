import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

const Error404 = lazy(() => import(/* webpackChunkName: 'error-404' */ '~/pages/Error404'))
const Login = lazy(() => import(/* webpackChunkName: 'login' */ '~/pages/auth/Login'))
const SignUp = lazy(() => import(/* webpackChunkName: 'sign-up' */ '~/pages/auth/SignUp'))
const ForgotPassword = lazy(
  () => import(/* webpackChunkName: 'forgot-password' */ '~/pages/auth/ForgotPassword')
)

const Developpers = lazy(
  () => import(/* webpackChunkName: 'developpers-layout' */ '~/layouts/Developpers')
)
const ApiKeys = lazy(() => import(/* webpackChunkName: 'api-keys' */ '~/pages/developpers/ApiKeys'))
const Webhook = lazy(() => import(/* webpackChunkName: 'api-keys' */ '~/pages/developpers/Webhook'))

const Settings = lazy(() => import(/* webpackChunkName: 'settings' */ '~/layouts/Settings'))
const TaxRate = lazy(() => import(/* webpackChunkName: 'tax-rate' */ '~/pages/settings/VatRate'))

const BillableMetricsList = lazy(
  () => import(/* webpackChunkName: 'billable-metrics' */ '~/pages/BillableMetricsList')
)
const CreateBillableMetric = lazy(
  () => import(/* webpackChunkName: 'create-billable-metrics' */ '~/pages/CreateBillableMetric')
)
const PlansList = lazy(() => import(/* webpackChunkName: 'plans-list' */ '~/pages/PlansList'))
const CreatePlan = lazy(() => import(/* webpackChunkName: 'create-plan' */ '~/pages/CreatePlan'))
const CustomersList = lazy(
  () => import(/* webpackChunkName: 'customers-list' */ '~/pages/CustomersList')
)
const CustomerDetails = lazy(
  () => import(/* webpackChunkName: 'customer-details' */ '~/pages/CustomerDetails')
)
const CouponsList = lazy(() => import(/* webpackChunkName: 'coupons-list' */ '~/pages/CouponsList'))
const CreateCoupon = lazy(
  () => import(/* webpackChunkName: 'create-coupon' */ '~/pages/CreateCoupon')
)

const SideNavLayout = lazy(() => import(/* webpackChunkName: 'home' */ '~/layouts/SideNavLayout'))

export interface CustomRouteObject extends Omit<RouteObject, 'children' | 'path'> {
  path?: string | string[]
  private?: boolean
  onlyPublic?: boolean
  redirect?: string
  children?: CustomRouteObject[]
}

export const LOGIN_ROUTE = '/login'
export const FORGOT_PASSWORD_ROUTE = '/forgot-password'
export const SIGN_UP_ROUTE = '/sign-up'
export const HOME_ROUTE = '/'

// Billable metrics routes
export const BILLABLE_METRICS_ROUTE = '/billable-metrics'
export const CREATE_BILLABLE_METRIC_ROUTE = '/create/billable-metrics'
export const UPDATE_BILLABLE_METRIC_ROUTE = '/update/billable-metric/:id'

// Plans routes
export const PLANS_ROUTE = '/plans'
export const CREATE_PLAN_ROUTE = '/create/plans'
export const UPDATE_PLAN_ROUTE = '/update/plan/:id'

// Customer routes
export const CUSTOMERS_LIST_ROUTE = '/customers'
export const CUSTOMER_DETAILS_ROUTE = '/customer/:id'

// Coupons routes
export const COUPONS_ROUTE = '/coupons'
export const CREATE_COUPON_ROUTE = '/create/coupons'
export const UPDATE_COUPON_ROUTE = '/update/coupons/:id'

export const ERROR_404_ROUTE = '/404'

// Developpers routes
export const DEVELOPPERS_ROUTE = '/developpers'
export const API_KEYS_ROUTE = `${DEVELOPPERS_ROUTE}/api-keys`
export const WEBHOOK_ROUTE = `${DEVELOPPERS_ROUTE}/webhook`

// Settings route
export const SETTINGS_ROUTE = '/settings'
export const VAT_RATE_ROUTE = `${SETTINGS_ROUTE}/tax-rate`

export const routes: CustomRouteObject[] = [
  {
    path: '*',
    element: <Error404 />,
  },
  {
    path: ERROR_404_ROUTE,
    element: <Error404 />,
  },
  {
    element: <SideNavLayout />,
    private: true,
    children: [
      {
        path: [BILLABLE_METRICS_ROUTE, HOME_ROUTE],
        private: true,
        element: <BillableMetricsList />,
      },
      {
        private: true,
        element: <Developpers />,
        children: [
          {
            path: [API_KEYS_ROUTE, DEVELOPPERS_ROUTE],
            private: true,
            element: <ApiKeys />,
          },
          {
            path: WEBHOOK_ROUTE,
            private: true,
            element: <Webhook />,
          },
        ],
      },
      {
        private: true,
        element: <Settings />,
        children: [
          {
            path: [SETTINGS_ROUTE, VAT_RATE_ROUTE],
            private: true,
            element: <TaxRate />,
          },
        ],
      },
      {
        path: PLANS_ROUTE,
        private: true,
        element: <PlansList />,
      },
      {
        path: CUSTOMERS_LIST_ROUTE,
        private: true,
        element: <CustomersList />,
      },
      {
        path: CUSTOMER_DETAILS_ROUTE,
        private: true,
        element: <CustomerDetails />,
      },
      {
        path: COUPONS_ROUTE,
        private: true,
        element: <CouponsList />,
      },
    ],
  },
  {
    path: [CREATE_COUPON_ROUTE, UPDATE_COUPON_ROUTE],
    private: true,
    element: <CreateCoupon />,
  },
  {
    path: [CREATE_BILLABLE_METRIC_ROUTE, UPDATE_BILLABLE_METRIC_ROUTE],
    private: true,
    element: <CreateBillableMetric />,
  },
  {
    path: [CREATE_PLAN_ROUTE, UPDATE_PLAN_ROUTE],
    private: true,
    element: <CreatePlan />,
  },
  {
    path: LOGIN_ROUTE,
    element: <Login />,
    onlyPublic: true,
  },
  {
    path: FORGOT_PASSWORD_ROUTE,
    element: <ForgotPassword />,
    onlyPublic: true,
  },
  {
    path: SIGN_UP_ROUTE,
    element: <SignUp />,
    onlyPublic: true,
  },
]
