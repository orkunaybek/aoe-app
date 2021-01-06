import React from 'react';
import { mount } from 'enzyme';
import UnitCard from './UnitCard';

test('renders according to props', () => {
  const unit = {
    id: 3,
    name: 'Arbalest',
    description: 'Upgraded crossbowman',
    expansion: 'Age of Kings',
    age: 'Imperial',
    cost: {
      Wood: 25,
      Gold: 45,
    },
    build_time: 27,
    reload_time: 2,
    attack_delay: 0.35,
    movement_rate: 0.96,
    line_of_sight: 7,
    hit_points: 40,
    range: 5,
    attack: 6,
    armor: '0/0',
    attack_bonus: ['+3 spearmen'],
    accuracy: '90%',
  };

  const wrapper = mount(<UnitCard unit={unit} />);

  // check if name renders correctly
  const name = wrapper.find('.name').text();
  expect(name).toBe(unit.name);

  // check if age renders correctly
  const age = wrapper.find('.age').text();
  expect(age).toBe(unit.age);

  // check if wood cost renders correctly
  const wood = wrapper.find('.wood-value').text();
  expect(wood).toBe(unit.cost.Wood.toString());

  // check if gold cost renders correctly
  const gold = wrapper.find('.gold-value').text();
  expect(gold).toBe(unit.cost.Gold.toString());

  // check if food cost renders even it does not exists in the object
  expect(wrapper.find('.food-value').exists()).toBeFalsy();
});
