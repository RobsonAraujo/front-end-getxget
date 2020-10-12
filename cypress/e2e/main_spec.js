/// <reference types="cypress" />

import { MainPage } from '../page-objects/main_object'

// @ts-check

describe('Main page tests', () => {
  const mainPage = new MainPage()

  beforeEach(() => {
    mainPage.navigate()
  })
})

export {}
