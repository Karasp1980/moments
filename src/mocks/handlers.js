import { rest } from "msw";

const baseURL = "https://react-taskmanager.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 2,
        username: "Fräs_Karin",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 12,
        profile_image:
          "https://res.cloudinary.com/dglcwfgzw/image/upload/v1/media/images/2012-07-05_21.37.51_kw6yod",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
