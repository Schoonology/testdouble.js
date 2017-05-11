describe 'td.replace ES6 export', ->

  describe 'Replacing default function', ->
    Given -> @double = td.replace('../../fixtures/export-function').default
    When -> @double()
    Then -> td.verify(@double())

  describe 'Replacing default object by path', ->
    Given -> @double = td.replace('../../fixtures/export-object').default
    When -> @double.func()
    Then -> td.verify(@double.func())

  describe 'Replacing within default object', ->
    Given -> @dependency = require('../../fixtures/export-object').default
    Given -> td.replace(@dependency, 'func')
    When -> @dependency.func()
    Then -> td.verify(@dependency.func())

  describe 'Replacing named object', ->
    Given -> @double = td.replace('../../fixtures/export-object').named
    When -> @double.func()
    Then -> td.verify(@double.func())

  describe 'Replacing within named object', ->
    Given -> @dependency = require('../../fixtures/export-object').named
    Given -> td.replace(@dependency, 'func')
    When -> @dependency.func()
    Then -> td.verify(@dependency.func())
