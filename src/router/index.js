import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/meals",
    name: "meals",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MealsView.vue"),
  },
  {
    path: "/meal-details",
    name: "meal-details",
    component: () => import("../views/MealDetailsView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",

    component: () => import("../views/PageNotFoundView.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/DashboardView.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//Verifica si el estado de autenticacion ha cambiado, la función getCurrentUser devuelve una promesa que se resuelve con el usuario actualmente autenticado cuando el estado de autenticación cambia correctamente. Si hay algún error, la promesa se rechaza con el error correspondiente.
const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

//Router verifica si la ruta a la se dirige requiere autenticacion
router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("you dont have access!");
      next("/login");
    }
  } else {
    next();
  }
});

router.beforeEach(async (to, from, next) => {
  if (to.name === "login" && (await getCurrentUser())) {
    next({ name: "home" });
  } else {
    next();
  }
});

export default router;
