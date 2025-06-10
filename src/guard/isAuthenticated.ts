import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import { userRoles } from "../utils/constants";

function getRole(): number | null {
  return Number(sessionStorage.getItem("typeLogin"));
}

export function isAuthenticated(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const role = getRole();

  if (to.path.startsWith("/auth")) {
    next();
    return;
  }

  if (to.path.startsWith("/admin")) {
    if (role === userRoles.ADMIN) {
      next();
    } else {
      next("/auth/admin");
    }
    return;
  }

  if (to.path.startsWith("/student")) {
    if (role === userRoles.STUDENT) {
      next();
    } else {
      next("/auth/student");
    }
    return;
  }

  // Para otras rutas, permitir acceso
  next();
}
