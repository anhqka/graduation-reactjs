import instance from "./instance";

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNTk3ZGQ0ZjJmYWU1MGZhMzU4ZjE0OWZiMTQzNDYxN2UyNmVlYjM3NjY0YmVlNTZhMTNkMTY2ZTYzZDk0MjNkMTkzMzlkOWUyOTNiZmE0YzQiLCJpYXQiOjE2NjcxODc0NTguNzg0MjU1LCJuYmYiOjE2NjcxODc0NTguNzg0MjU4LCJleHAiOjE2ODI5MTIyNTguMzE1NTM5LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.L8sbn5-dt7LYT5dO2lqB60--1thFH4nRaHEu-8Q88gopyL6m1eDx70hxKQDiaEj40pEI4d1_r5NKa-PYwTVj3ptMroQDBFtoe0GBjcIJm6Uii2TRDFn7PuqFVtiKRmDlHtkbE-Ciq6aMJxAfkkGohJHhuMmcF9vO9oBF_p0EF5Vbu28-k5UfZmxAd8iohGDWLU_F_UcqBbd0cq3BFao_zDmRgkZRsSVVb1OtkDW300iMFYUwdGBWtXzREUVh_UZ1CHd-jb7B5lZLARqhuJRCPJnWPROr-CkkcaHDX8JXvjVMo206jyiaK8C2S3LkXHmt9OfI0wy6nlKr6wSjPNU93_4mU0QUUGLWOU6rihwYhAepZp1N6Unpf1lVKEIsJrbamDV6s4UaFV803HdLzyunlmApCz-40NbziMNkvLxi6-FayB8GIgs6hMveslD_HGqAdkDOjECEV10gqYgu1x3JKt8jXppGJeuMCHZo3o_Lr_qYskxCrvgZqmpKz7n2eVjTAhnnyR75uovkEBz1lNiYagp3KCOn61_8nNLXJxpgSIVqqDqcjxVGM4dBI8zmmj60Qfj6xu3hLXjnS4_EFHmyxmlDgh3Y4OG_JncVZNvZ1HC9WRIcdskZqt8TkB_Yq4k03qVP3cjwGulLX-pcTFqn-tB_IPWgkhWsBYUx9-YPEcY";

const getStores = (entpoint) => {
  const api = "stores" + entpoint;
  return instance.get(api, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
const addStore = (data) => {
  const api = "stores";
  return instance.post(api, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
const updateStore = (store) => {
  const api = "stores/" + store.get("id");
  return instance.post(api, store, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const removeStore = (id) => {
  const api = "stores/";
  return instance.delete(api + id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const getServicesStore = (id) => {
  const api = `stores/${id}/choose-services`;
  return instance.get(api, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const updateServicesStore = (service) => {
  const api = `stores/${service.id}/choose-services`;
  console.log("api", api, service.data, "service.data");
  return instance.post(api, service.data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export {
  getStores,
  addStore,
  updateStore,
  removeStore,
  getServicesStore,
  updateServicesStore,
};
