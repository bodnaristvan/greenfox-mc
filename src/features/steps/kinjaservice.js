'use strict';

import { expect } from 'chai';
import {PostModel} from '../../server/models/post';

export default function () {
  this.When('I request the post "$postId"', async function (postId) {
    const kinjaservice = this.container.get('kinjaservice');
    this.context.kinjaPost = await kinjaservice.getPost(postId);
  });

  this.Then('the result is a Post model instance', async function () {
    expect(this.context.kinjaPost).to.be.an.instanceof(PostModel);
  });


}
