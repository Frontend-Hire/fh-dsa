import { describe, test, expect } from 'vitest';

import { LinkedList } from './index';

describe('LinkedList happy flows', () => {
  test('should create an empty linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
  });

  test('should insert node to linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    expect(linkedList.head.value).toBe(1);
    expect(linkedList.head.next.value).toBe(2);
    expect(linkedList.tail.value).toBe(3);
  });

  test('should remove node from linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.remove(2);
    expect(linkedList.head.value).toBe(1);
    expect(linkedList.head.next.value).toBe(3);
    expect(linkedList.tail.value).toBe(3);
  });

  test('should search node in linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    expect(linkedList.search(2).value).toBe(2);
    expect(linkedList.search(4)).toBeNull();
  });

  test('should print linked list', () => {
    const linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    expect(linkedList.print()).toBe('1 -> 2 -> 3');
  });
});

describe('LinkedList edge cases', () => {
  test('should handle edge cases', () => {
    const linkedList = new LinkedList();
    expect(linkedList.remove(1)).toBe(false);
    expect(linkedList.search(1)).toBeNull(null);
    expect(linkedList.print()).toBe('');
  });
});
