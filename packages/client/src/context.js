// @flow

import axios from 'axios'

let transport = axios
const context = {
  get transport () {
    return transport
  },
  set transport (value) {
    transport = value
  }
}

export default context
