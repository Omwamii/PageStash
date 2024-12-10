// custom decorator that goes into request object passed, fetches the user and returns it

import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request: Express.Request = ctx.switchToHttp().getRequest(); // get the request object

    console.log('From GetUser custom decorator:')
    console.log(request.user);

    if (data) {
        return request.user[data];
    }

    return request.user;
  },
);
