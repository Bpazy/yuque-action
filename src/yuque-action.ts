import * as core from '@actions/core';
import Axios from 'axios';

function httpClient() {
  return Axios.create({
    baseURL: 'https://www.yuque.com/api/v2',
    headers: {
      'Content-Type': 'application/json',
      'X-Auth-Token': '',
      'User-Agent': 'yuque-action',
    }
  });
}

async function test() {
  try {
    const instance = httpClient();
    const response = await instance.get('/repos/**/**/docs');
    console.log(response.data);
  } catch (error) {
    core.setFailed(error.message);
  }
}

test();
