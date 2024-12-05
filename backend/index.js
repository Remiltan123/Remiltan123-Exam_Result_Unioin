const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')

const app = express();
const port = process.env.port || 3001;