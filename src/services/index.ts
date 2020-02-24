import searchRoutes from "./search/routes";
import bookRoutes from "./book/routes";
import paypalRoutes from "./paypal/routes"

export default [...searchRoutes, ...bookRoutes, ...paypalRoutes];