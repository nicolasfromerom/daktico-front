import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

function getRole(): string | null {
  return sessionStorage.getItem("role");
}

export function isAuthenticated(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  // Ejemplo: cookie "role" puede ser "student" o "admin"
  const role = getRole();

  if (to.path.startsWith("/auth")) {
    // Permitir acceso a rutas de login
    next();
    return;
  }

  if (to.path.startsWith("/admin")) {
    if (role === "admin") {
      next();
    } else {
      next("/auth/admin");
    }
    return;
  }

  if (to.path.startsWith("/student")) {
    if (role === "student") {
      next();
    } else {
      next("/auth/student");
    }
    return;
  }

  // Para otras rutas, permitir acceso
  next();
}
