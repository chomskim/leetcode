class MyCircularQueue {
  Integer[] buffer;
  int front = 0;
  int rear = 0;
  boolean empty = true;
  boolean full = false;

  public MyCircularQueue(int k) {
    buffer = new Integer[k];
    front = 0;
    rear = 0;
    empty = true;
    full = false;
  }

  public boolean enQueue(int value) {
    if (isFull())
      return false;
    if (!empty) {
      rear += 1;
      rear %= buffer.length;
    }
    buffer[rear] = value;
    empty = false;
    int newRear = (rear + 1) % buffer.length;
    full = (newRear == front);
    return true;
  }

  public boolean deQueue() {
    if (!empty) {
      full = false;
      if (front == rear)
        empty = true;
      else {
        front += 1;
        front %= buffer.length;
      }
      return true;

    } else
      return false;
  }

  public int Front() {
    if (empty)
      return -1;
    return buffer[front];
  }

  public int Rear() {
    if (empty)
      return -1;
    return buffer[rear];
  }

  public boolean isEmpty() {
    return empty;
  }

  public boolean isFull() {
    return full;
  }

}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * MyCircularQueue obj = new MyCircularQueue(k);
 * boolean param_1 = obj.enQueue(value);
 * boolean param_2 = obj.deQueue();
 * int param_3 = obj.Front();
 * int param_4 = obj.Rear();
 * boolean param_5 = obj.isEmpty();
 * boolean param_6 = obj.isFull();
 */