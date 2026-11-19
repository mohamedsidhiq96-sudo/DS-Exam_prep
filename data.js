const DB = {
  "u1": {
    "name": "Unit 1: Lists, Linked Lists & Radix Sort",
    "mcq": [
      {
        "id": "u1_m1",
        "q": "What is an Abstract Data Type (ADT)?",
        "o": [
          "A mathematical model of data with a set of operations, independent of implementation",
          "A fixed memory layout for storing data",
          "A C struct that contains member functions",
          "A primitive type defined by the compiler"
        ],
        "a": 0
      },
      {
        "id": "u1_m2",
        "q": "What does an ADT hide from the user?",
        "o": [
          "The names of its operations",
          "How the data and operations are implemented",
          "The type of values it stores",
          "The purpose of the data structure"
        ],
        "a": 1
      },
      {
        "id": "u1_m3",
        "q": "What is the worst-case time complexity of inserting an element at the beginning of an array-based list of n elements?",
        "o": [
          "O(1)",
          "O(log n)",
          "O(n²)",
          "O(n)"
        ],
        "a": 3
      },
      {
        "id": "u1_m4",
        "q": "Which of the following is NOT a typical operation of the List ADT?",
        "o": [
          "Insert an element at a given position",
          "Delete an element from the list",
          "Evaluate a postfix expression",
          "Find the position of an element"
        ],
        "a": 2
      },
      {
        "id": "u1_m5",
        "q": "Which is a major disadvantage of the array-based implementation of a list?",
        "o": [
          "The maximum size must be known in advance",
          "Elements cannot be accessed using an index",
          "Each element needs an extra pointer",
          "It cannot store integer values"
        ],
        "a": 0
      },
      {
        "id": "u1_m6",
        "q": "Which is an advantage of a linked list over an array-based list?",
        "o": [
          "Faster random access by index",
          "Insertion and deletion without shifting elements",
          "Less memory used per element",
          "Elements stored in contiguous memory"
        ],
        "a": 1
      },
      {
        "id": "u1_m7",
        "q": "In a singly linked list, what does the next pointer of the last node contain?",
        "o": [
          "The address of the first node",
          "The address of the previous node",
          "NULL",
          "The data of the first node"
        ],
        "a": 2
      },
      {
        "id": "u1_m8",
        "q": "What does each node of a doubly linked list contain?",
        "o": [
          "Data and a single next pointer",
          "Data, a prev pointer and a next pointer",
          "Data and two data fields",
          "Only prev and next pointers without data"
        ],
        "a": 1
      },
      {
        "id": "u1_m9",
        "q": "What is the time complexity of inserting a new node at the beginning of a singly linked list when the head pointer is available?",
        "o": [
          "O(n)",
          "O(log n)",
          "O(n²)",
          "O(1)"
        ],
        "a": 3
      },
      {
        "id": "u1_m10",
        "q": "In a circularly linked list, what does the next pointer of the last node point to?",
        "o": [
          "The first node of the list",
          "NULL",
          "The middle node of the list",
          "The previous node of the list"
        ],
        "a": 0
      },
      {
        "id": "u1_m11",
        "q": "What is a multilist?",
        "o": [
          "A list that stores only one data type",
          "A list that is sorted in multiple passes",
          "A linked structure whose nodes belong to more than one list through multiple pointer fields",
          "A list stored in several arrays of equal size"
        ],
        "a": 2
      },
      {
        "id": "u1_m12",
        "q": "In LSD (least significant digit) radix sort on decimal numbers, in which order are the digits processed?",
        "o": [
          "Most significant digit to least significant digit",
          "Least significant digit to most significant digit",
          "Middle digit first, then outward",
          "In a random order of digits"
        ],
        "a": 1
      },
      {
        "id": "u1_m13",
        "q": "In a linked list implementation of the Polynomial ADT, what does each node typically store?",
        "o": [
          "Only the coefficient",
          "Only the exponent and the degree",
          "The variable name and a prev pointer",
          "The coefficient, the exponent and a pointer to the next term"
        ],
        "a": 3
      },
      {
        "id": "u1_m14",
        "q": "Which of the following is a common application of linked lists?",
        "o": [
          "Direct hardware register access",
          "Implementing the C preprocessor",
          "Representing polynomials and sparse matrices",
          "Storing a fixed-size lookup table"
        ],
        "a": 2
      },
      {
        "id": "u1_m15",
        "q": "Radix sort is classified as which type of sorting algorithm?",
        "o": [
          "A non-comparison, distribution-based sort",
          "A comparison-based divide-and-conquer sort",
          "A selection-based sort",
          "A sort based on a binary heap"
        ],
        "a": 0
      },
      {
        "id": "u1_m16",
        "q": "What is the output of the following C code?",
        "code": "#include <stdio.h>\nint main() {\n    int a[5] = {10, 20, 30, 40};\n    int n = 4, pos = 1, i;\n    for (i = n; i > pos; i--)\n        a[i] = a[i - 1];\n    a[pos] = 99;\n    n++;\n    for (i = 0; i < n; i++)\n        printf(\"%d \", a[i]);\n    return 0;\n}",
        "o": [
          "99 10 20 30 40",
          "10 20 99 30 40",
          "10 99 30 40 0",
          "10 99 20 30 40"
        ],
        "a": 3
      },
      {
        "id": "u1_m17",
        "q": "What is the output of the following C code?",
        "code": "#include <stdio.h>\nstruct Node {\n    int data;\n    struct Node *next;\n};\nint main() {\n    struct Node n1 = {1, NULL}, n2 = {2, NULL}, n3 = {3, NULL};\n    n1.next = &n2;\n    n2.next = &n3;\n    n3.next = &n1;\n    struct Node *p = &n2;\n    int i;\n    for (i = 0; i < 4; i++) {\n        printf(\"%d \", p->data);\n        p = p->next;\n    }\n    return 0;\n}",
        "o": [
          "2 3",
          "2 3 1",
          "2 3 1 2",
          "2 3 1 3"
        ],
        "a": 2
      },
      {
        "id": "u1_m18",
        "q": "What is the output of the following C code?",
        "code": "#include <stdio.h>\nint main() {\n    int arr[] = {170, 45, 75, 90};\n    int i;\n    for (i = 0; i < 4; i++)\n        printf(\"%d \", (arr[i] / 10) % 10);\n    return 0;\n}",
        "o": [
          "7 4 7 9",
          "0 5 5 0",
          "1 0 0 0",
          "17 4 7 9"
        ],
        "a": 0
      },
      {
        "id": "u1_m19",
        "q": "What is the output of the following C code?",
        "code": "#include <stdio.h>\nstruct Node {\n    int data;\n    struct Node *next;\n};\nint main() {\n    struct Node c = {30, NULL};\n    struct Node b = {20, &c};\n    struct Node a = {10, &b};\n    struct Node *p = &a;\n    p = p->next;\n    printf(\"%d %d\", p->data, p->next->data);\n    return 0;\n}",
        "o": [
          "10 20",
          "20 30",
          "30 NULL",
          "10 30"
        ],
        "a": 1
      },
      {
        "id": "u1_m20",
        "q": "What is the output of the following C code?",
        "code": "#include <stdio.h>\nstruct Node {\n    int data;\n    struct Node *prev, *next;\n};\nint main() {\n    struct Node a = {5, NULL, NULL};\n    struct Node b = {15, NULL, NULL};\n    struct Node c = {25, NULL, NULL};\n    a.next = &b; b.prev = &a;\n    b.next = &c; c.prev = &b;\n    struct Node *p = &c;\n    while (p != NULL) {\n        printf(\"%d \", p->data);\n        p = p->prev;\n    }\n    return 0;\n}",
        "o": [
          "5 15 25",
          "25 5",
          "25 15",
          "25 15 5"
        ],
        "a": 3
      }
    ],
    "debug": [
      {
        "id": "u1_d1",
        "title": "Q1. Reverse a Singly Linked List",
        "ps": "Kiran develops a travel app that stores the station codes of a route in a singly linked list, in the order the train visits them. For the return journey, the same stations must be visited in the opposite order, so the list has to be reversed by changing the next pointers of its nodes, without creating any new nodes.\n\nThe function reverseList() in the editable area is meant to reverse the list and return the new head, but the code contains errors. Debug the code so that the program prints the expected output.",
        "inFmt": "The first line of input consists of an integer n representing the number of stations.\n\nThe second line of input consists of n space-separated integers representing the station codes in travel order.",
        "outFmt": "The first line of output prints \"Reversed List: \" followed by the station codes of the reversed list separated by spaces.",
        "cons": "1 ≤ n ≤ 100\n-1000 ≤ station codes[i] ≤ 1000",
        "sampleIn": "4\n1 3 5 7",
        "sampleOut": "Reversed List: 7 5 3 1",
        "header": "#include <stdio.h>\n#include <stdlib.h>\nstruct Node {\n  int data;\n  struct Node *next;\n};",
        "buggy": "struct Node *reverseList(struct Node *head) {\n  struct Node *prev = NULL;\n  struct Node *curr = head;\n  while (curr != NULL) {\n    curr->next = prev;\n    prev = curr;\n    curr = curr->next;\n  }\n  return curr;\n}",
        "footer": "struct Node *append(struct Node *head, int x) {\n  struct Node *node =\n      (struct Node *)malloc(sizeof(struct Node));\n  node->data = x;\n  node->next = NULL;\n  if (head == NULL) return node;\n  struct Node *curr = head;\n  while (curr->next != NULL) curr = curr->next;\n  curr->next = node;\n  return head;\n}\nvoid printList(struct Node *head) {\n  printf(\"Reversed List:\");\n  for (struct Node *curr = head; curr != NULL;\n       curr = curr->next) {\n    printf(\" %d\", curr->data);\n  }\n  printf(\"\\n\");\n}\nvoid freeList(struct Node *head) {\n  struct Node *temp;\n  while (head != NULL) {\n    temp = head;\n    head = head->next;\n    free(temp);\n  }\n}\nint main() {\n  int n;\n  struct Node *head = NULL;\n  if (scanf(\"%d\", &n) != 1) return 0;\n  for (int i = 0; i < n; i++) {\n    int x;\n    scanf(\"%d\", &x);\n    head = append(head, x);\n  }\n  head = reverseList(head);\n  printList(head);\n  freeList(head);\n  return 0;\n}",
        "samples": [
          {
            "input": "4\n1 3 5 7",
            "expected": "Reversed List: 7 5 3 1"
          },
          {
            "input": "2\n8 9",
            "expected": "Reversed List: 9 8"
          }
        ],
        "hidden_cases": [
          {
            "input": "4\n1 3 5 7",
            "expected": "Reversed List: 7 5 3 1"
          },
          {
            "input": "2\n8 9",
            "expected": "Reversed List: 9 8"
          },
          {
            "input": "1\n99",
            "expected": "Reversed List: 99"
          },
          {
            "input": "5\n4 4 4 9 9",
            "expected": "Reversed List: 9 9 4 4 4"
          },
          {
            "input": "9\n21 34 55 89 144 233 377 610 987",
            "expected": "Reversed List: 987 610 377 233 144 89 55 34 21"
          },
          {
            "input": "8\n-10 20 -30 40 -50 60 -70 80",
            "expected": "Reversed List: 80 -70 60 -50 40 -30 20 -10"
          }
        ],
        "sol": "struct Node *reverseList(struct Node *head) {\n  struct Node *prev = NULL;\n  struct Node *curr = head;\n  while (curr != NULL) {\n    struct Node *next = curr->next;\n    curr->next = prev;\n    prev = curr;\n    curr = next;\n  }\n  return prev;\n}"
      },
      {
        "id": "u1_d2",
        "title": "Q2. Delete an Element at a Given Position in an Array-Based List",
        "ps": "Rohit manages the waiting list of a clinic, where the token numbers of waiting patients are stored in an array-based list. When a patient at a given position (counted from 1) leaves the queue, that token has to be removed from the list and every token after it must move one place to the left to close the gap.\n\nThe function deleteAt() in the editable area is meant to remove the element at the given position and return the new size of the list, but the code contains errors. Debug the code so that the program prints the expected output.",
        "inFmt": "The first line of input consists of an integer n representing the number of tokens in the list.\n\nThe second line of input consists of n space-separated integers representing the token numbers.\n\nThe third line of input consists of an integer pos representing the position (counted from 1) of the token to be removed.",
        "outFmt": "The first line of output prints \"Updated List: \" followed by the remaining tokens separated by spaces, or the string \"Empty\" if no token remains.",
        "cons": "1 ≤ n ≤ 100\n1 ≤ pos ≤ n\n-1000 ≤ token numbers[i] ≤ 1000",
        "sampleIn": "5\n7 8 9 10 11\n2",
        "sampleOut": "Updated List: 7 9 10 11",
        "header": "#include <stdio.h>",
        "buggy": "void printList(int a[], int n) {\n  printf(\"Updated List:\");\n  for (int i = 0; i < n; i++) printf(\" %d\", a[i]);\n  printf(\"\\n\");\n}\nint deleteAt(int a[], int n, int pos) {\n  for (int i = pos - 1; i < n; i++)\n    a[i] = a[i + 1];\n  return n;\n}",
        "footer": "int main() {\n  int n, pos;\n  int a[105];\n  if (scanf(\"%d\", &n) != 1) return 0;\n  for (int i = 0; i < n; i++) scanf(\"%d\", &a[i]);\n  scanf(\"%d\", &pos);\n  n = deleteAt(a, n, pos);\n  printList(a, n);\n  return 0;\n}",
        "samples": [
          {
            "input": "5\n7 8 9 10 11\n2",
            "expected": "Updated List: 7 9 10 11"
          },
          {
            "input": "3\n4 9 12\n3",
            "expected": "Updated List: 4 9"
          }
        ],
        "hidden_cases": [
          {
            "input": "5\n7 8 9 10 11\n2",
            "expected": "Updated List: 7 9 10 11"
          },
          {
            "input": "3\n4 9 12\n3",
            "expected": "Updated List: 4 9"
          },
          {
            "input": "4\n5 6 7 8\n4",
            "expected": "Updated List: 5 6 7"
          },
          {
            "input": "1\n9\n1",
            "expected": "Updated List: Empty"
          },
          {
            "input": "7\n11 22 33 44 55 66 77\n5",
            "expected": "Updated List: 11 22 33 44 66 77"
          },
          {
            "input": "6\n-5 -3 0 2 4 6\n2",
            "expected": "Updated List: -5 0 2 4 6"
          }
        ],
        "sol": "void printList(int a[], int n) {\n  printf(\"Updated List:\");\n  if (n == 0) {\n    printf(\" Empty\");\n  }\n  for (int i = 0; i < n; i++) printf(\" %d\", a[i]);\n  printf(\"\\n\");\n}\nint deleteAt(int a[], int n, int pos) {\n  for (int i = pos; i < n; i++)\n    a[i - 1] = a[i];\n  return n - 1;\n}"
      },
      {
        "id": "u1_d3",
        "title": "Q3. Traverse a Circular Linked List and Count Nodes",
        "ps": "Neha plans the night duty of a campus, where the IDs of the security guards are kept in a circular linked list because after the last guard in the roster, the duty goes back to the first guard. The last node of the list therefore points back to the first node, and there is no node whose next pointer is NULL.\n\nThe function traverse() in the editable area is meant to visit every node exactly once, starting from the head, print all the guard IDs, and then print the number of nodes. The code contains errors. Debug the code so that the program prints the expected output.",
        "inFmt": "The first line of input consists of an integer n representing the number of guards.\n\nThe second line of input consists of n space-separated integers representing the guard IDs in roster order.",
        "outFmt": "The first line of output prints \"Circular List: \" followed by the guard IDs in roster order separated by spaces.\n\nThe second line of output prints \"Node Count: \" followed by an integer representing the number of nodes in the list.",
        "cons": "1 ≤ n ≤ 100",
        "sampleIn": "2\n100 200",
        "sampleOut": "Circular List: 100 200\nNode Count: 2",
        "header": "#include <stdio.h>\n#include <stdlib.h>\nstruct Node {\n  int data;\n  struct Node *next;\n};\nstruct Node *createCircular(int arr[], int n) {\n  struct Node *head = NULL, *tail = NULL;\n  for (int i = 0; i < n; i++) {\n    struct Node *node =\n        (struct Node *)malloc(sizeof(struct Node));\n    node->data = arr[i];\n    node->next = NULL;\n    if (head == NULL)\n      head = node;\n    else\n      tail->next = node;\n    tail = node;\n  }\n  if (tail != NULL) tail->next = head;\n  return head;\n}",
        "buggy": "void traverse(struct Node *head) {\n  if (head == NULL) {\n    printf(\"Circular List:\\nNode Count: 0\\n\");\n    return;\n  }\n  struct Node *curr = head;\n  int count = 0;\n  printf(\"Circular List:\");\n  while (curr != NULL) {\n    printf(\" %d\", curr->data);\n    count++;\n    curr = curr->next;\n  }\n  printf(\"\\n\");\n  printf(\"Node Count: %d\\n\", count);\n}",
        "footer": "void freeCircular(struct Node *head, int n) {\n  struct Node *curr = head;\n  for (int i = 0; i < n && curr != NULL; i++) {\n    struct Node *next = curr->next;\n    free(curr);\n    curr = next;\n  }\n}\nint main() {\n  int n;\n  int a[105];\n  if (scanf(\"%d\", &n) != 1) return 0;\n  for (int i = 0; i < n; i++) scanf(\"%d\", &a[i]);\n  struct Node *head = createCircular(a, n);\n  traverse(head);\n  freeCircular(head, n);\n  return 0;\n}",
        "samples": [
          {
            "input": "2\n100 200",
            "expected": "Circular List: 100 200\nNode Count: 2"
          },
          {
            "input": "4\n9 8 7 6",
            "expected": "Circular List: 9 8 7 6\nNode Count: 4"
          }
        ],
        "hidden_cases": [
          {
            "input": "2\n100 200",
            "expected": "Circular List: 100 200\nNode Count: 2"
          },
          {
            "input": "4\n9 8 7 6",
            "expected": "Circular List: 9 8 7 6\nNode Count: 4"
          },
          {
            "input": "1\n7",
            "expected": "Circular List: 7\nNode Count: 1"
          },
          {
            "input": "4\n2 4 4 2",
            "expected": "Circular List: 2 4 4 2\nNode Count: 4"
          },
          {
            "input": "8\n1 2 3 4 5 6 7 8",
            "expected": "Circular List: 1 2 3 4 5 6 7 8\nNode Count: 8"
          },
          {
            "input": "6\n-3 -2 -1 1 2 3",
            "expected": "Circular List: -3 -2 -1 1 2 3\nNode Count: 6"
          }
        ],
        "sol": "void traverse(struct Node *head) {\n  if (head == NULL) {\n    printf(\"Circular List:\\nNode Count: 0\\n\");\n    return;\n  }\n  struct Node *curr = head;\n  int count = 0;\n  printf(\"Circular List:\");\n  do {\n    printf(\" %d\", curr->data);\n    count++;\n    curr = curr->next;\n  } while (curr != head);\n  printf(\"\\n\");\n  printf(\"Node Count: %d\\n\", count);\n}"
      },
      {
        "id": "u1_d4",
        "title": "Q4. Delete the Last Node from a Doubly Linked List",
        "ps": "Arjun is building a browser whose history is stored in a doubly linked list, where every node holds a page ID and links to both the page visited before it and the page visited after it. When the user presses the \"clear last visit\" button, the most recently visited page, which is the last node of the list, must be removed.\n\nThe function deleteLast() in the editable area is meant to remove the last node and return the head of the list, but the code contains errors. Debug the code so that the program prints the expected output.",
        "inFmt": "The first line of input consists of an integer n representing the number of pages in the history.\n\nThe second line of input consists of n space-separated integers representing the page IDs in the order they were visited.",
        "outFmt": "The first line of output prints \"Updated List: \" followed by the remaining page IDs separated by spaces, or the string \"Empty\" if no page remains.",
        "cons": "1 ≤ n ≤ 100\n-1000 ≤ page IDs[i] ≤ 1000",
        "sampleIn": "3\n11 22 33",
        "sampleOut": "Updated List: 11 22",
        "header": "#include <stdio.h>\n#include <stdlib.h>\nstruct Node {\n  int data;\n  struct Node *prev;\n  struct Node *next;\n};\nstruct Node *append(struct Node *head, int x) {\n  struct Node *node =\n      (struct Node *)malloc(sizeof(struct Node));\n  node->data = x;\n  node->next = NULL;\n  node->prev = NULL;\n  if (head == NULL) return node;\n  struct Node *curr = head;\n  while (curr->next != NULL) curr = curr->next;\n  curr->next = node;\n  node->prev = curr;\n  return head;\n}",
        "buggy": "void printList(struct Node *head) {\n  printf(\"Updated List:\");\n  for (struct Node *curr = head; curr != NULL;\n       curr = curr->next) {\n    printf(\" %d\", curr->data);\n  }\n  printf(\"\\n\");\n}\nstruct Node *deleteLast(struct Node *head) {\n  if (head == NULL) return NULL;\n  struct Node *tail = head;\n  while (tail->next != NULL) tail = tail->next;\n  tail->prev->next = NULL;\n  free(tail);\n  return head;\n}",
        "footer": "void freeList(struct Node *head) {\n  struct Node *temp;\n  while (head != NULL) {\n    temp = head;\n    head = head->next;\n    free(temp);\n  }\n}\nint main() {\n  int n;\n  struct Node *head = NULL;\n  if (scanf(\"%d\", &n) != 1) return 0;\n  for (int i = 0; i < n; i++) {\n    int x;\n    scanf(\"%d\", &x);\n    head = append(head, x);\n  }\n  head = deleteLast(head);\n  printList(head);\n  freeList(head);\n  return 0;\n}",
        "samples": [
          {
            "input": "3\n11 22 33",
            "expected": "Updated List: 11 22"
          },
          {
            "input": "4\n9 8 7 6",
            "expected": "Updated List: 9 8 7"
          }
        ],
        "hidden_cases": [
        {
          "input": "1\n999",
          "expected": "Updated List: Empty"
        },
        {
          "input": "1\n0",
          "expected": "Updated List: Empty"
        },
        {
          "input": "1\n42",
          "expected": "Updated List: Empty"
        },
        {
          "input": "1\n7",
          "expected": "Updated List: Empty"
        },
        {
          "input": "1\n-37",
          "expected": "Updated List: Empty"
        },
        {
          "input": "1\n-1000",
          "expected": "Updated List: Empty"
        }
      ],
        "sol": "void printList(struct Node *head) {\n  printf(\"Updated List:\");\n  if (head == NULL) {\n    printf(\" Empty\");\n  }\n  for (struct Node *curr = head; curr != NULL;\n       curr = curr->next) {\n    printf(\" %d\", curr->data);\n  }\n  printf(\"\\n\");\n}\nstruct Node *deleteLast(struct Node *head) {\n  if (head == NULL) return NULL;\n  struct Node *tail = head;\n  while (tail->next != NULL) tail = tail->next;\n  // If only one node exists\n  if (tail->prev == NULL) {\n    free(tail);\n    return NULL;\n  }\n  tail->prev->next = NULL;\n  free(tail);\n  return head;\n}"
      },
      {
        "id": "u1_d5",
        "title": "Q5. Sort an Array Using LSD Radix Sort",
        "ps": "Divya works at a courier hub where parcel numbers must be sorted before loading. She uses LSD radix sort, which sorts the numbers digit by digit, starting from the units digit and moving towards the most significant digit. Every digit pass uses a stable counting sort, which means that numbers with the same current digit keep their earlier relative order.\n\nThe functions countSort() and radixSort() in the editable area are meant to sort the array in ascending order, but the code contains errors. Debug the code so that the program prints the expected output.",
        "inFmt": "The first line of input consists of an integer n representing the number of parcels.\n\nThe second line of input consists of n space-separated integers representing the parcel numbers.",
        "outFmt": "The first line of output prints \"Sorted Array: \" followed by the parcel numbers in ascending order separated by spaces.",
        "cons": "1 ≤ n ≤ 100\n0 ≤ parcel numbers[i] ≤ 10000",
        "sampleIn": "5\n21 12 31 13 22",
        "sampleOut": "Sorted Array: 12 13 21 22 31",
        "header": "#include <stdio.h>\nint getMax(int a[], int n) {\n  int max = a[0];\n  for (int i = 1; i < n; i++)\n    if (a[i] > max) max = a[i];\n  return max;\n}",
        "buggy": "void countSort(int a[], int n, int exp) {\n  int output[105];\n  int count[10] = {0};\n  for (int i = 0; i < n; i++) count[a[i] % 10]++;\n  for (int i = 1; i < 10; i++) count[i] += count[i - 1];\n  for (int i = 0; i < n; i++) {\n    int digit = (a[i] / exp) % 10;\n    output[count[digit] - 1] = a[i];\n    count[digit]--;\n  }\n  for (int i = 0; i < n; i++) a[i] = output[i];\n}\nvoid radixSort(int a[], int n) {\n  int max = getMax(a, n);\n  for (int exp = 1; exp < max; exp *= 10)\n    countSort(a, n, exp);\n}",
        "footer": "void printArray(int a[], int n) {\n  printf(\"Sorted Array:\");\n  for (int i = 0; i < n; i++) printf(\" %d\", a[i]);\n  printf(\"\\n\");\n}\nint main() {\n  int n;\n  int a[105];\n  if (scanf(\"%d\", &n) != 1) return 0;\n  for (int i = 0; i < n; i++) scanf(\"%d\", &a[i]);\n  radixSort(a, n);\n  printArray(a, n);\n  return 0;\n}",
        "samples": [
          {
            "input": "5\n21 12 31 13 22",
            "expected": "Sorted Array: 12 13 21 22 31"
          },
          {
            "input": "4\n99 9 90 19",
            "expected": "Sorted Array: 9 19 90 99"
          }
        ],
        "hidden_cases": [
        {
          "input": "6\n896 8500 9779 6957 8234 8009",
          "expected": "Sorted Array: 896 6957 8009 8234 8500 9779"
        },
        {
          "input": "5\n4314 7341 7841 7884 5076",
          "expected": "Sorted Array: 4314 5076 7341 7841 7884"
        },
        {
          "input": "6\n9944 5264 5191 6677 8443 3718",
          "expected": "Sorted Array: 3718 5191 5264 6677 8443 9944"
        },
        {
          "input": "8\n3752 6467 5413 9446 9955 8759 5129 957",
          "expected": "Sorted Array: 957 3752 5129 5413 6467 8759 9446 9955"
        },
        {
          "input": "4\n4735 9820 719 975",
          "expected": "Sorted Array: 719 975 4735 9820"
        },
        {
          "input": "2\n6251 8374",
          "expected": "Sorted Array: 6251 8374"
        }
      ],
        "sol": "void countSort(int a[], int n, int exp) {\n  int output[105];\n  int count[10] = {0};\n  for (int i = 0; i < n; i++)\n    count[(a[i] / exp) % 10]++;\n  for (int i = 1; i < 10; i++) count[i] += count[i - 1];\n  // Traverse in reverse order to ensure stability\n  for (int i = n - 1; i >= 0; i--) {\n    int digit = (a[i] / exp) % 10;\n    output[count[digit] - 1] = a[i];\n    count[digit]--;\n  }\n  for (int i = 0; i < n; i++) a[i] = output[i];\n}\nvoid radixSort(int a[], int n) {\n  int max = getMax(a, n);\n  for (int exp = 1; max / exp > 0; exp *= 10)\n    countSort(a, n, exp);\n}"
      }],
    "cod": [
      {
        "id": "u1_c1",
        "title": "Q1. Array-Based List Insertion",
        "ps": "Rohan builds a to-do application where the priority number of every task is stored in an array-based list. When a new urgent task arrives, it has to be placed at a specific position in the list, and every task from that position onwards must move one place to the right to make room for it.\n\nWrite a program that reads the current list, a position (counted from 1), and a new priority value, then inserts the value at that position by shifting the later elements to the right, and prints the updated list.",
        "sampleIn": "4\n7 8 9 10\n2 100",
        "sampleOut": "Updated List: 7 100 8 9 10",
        "hidden": [
          {
            "input": "4\n7 8 9 10\n2 100\n",
            "expected": "Updated List: 7 100 8 9 10"
          },
          {
            "input": "2\n4 9\n2 6\n",
            "expected": "Updated List: 4 6 9"
          },
          {
            "input": "5\n10 20 30 40 50\n3 25\n",
            "expected": "Updated List: 10 20 25 30 40 50"
          },
          {
            "input": "3\n1 2 3\n1 0\n",
            "expected": "Updated List: 0 1 2 3"
          },
          {
            "input": "4\n5 6 7 8\n5 9\n",
            "expected": "Updated List: 5 6 7 8 9"
          },
          {
            "input": "1\n100\n2 200\n",
            "expected": "Updated List: 100 200"
          }
        ],
        "sol": "#include <stdio.h>\nint main() {\n    int n, pos, value;\n    int a[105];\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) {\n        scanf(\"%d\", &a[i]);\n    }\n    scanf(\"%d %d\", &pos, &value);\n    for (int i = n; i >= pos; i--) {\n        a[i] = a[i - 1];\n    }\n    a[pos - 1] = value;\n    n++;\n    printf(\"Updated List:\");\n    for (int i = 0; i < n; i++) {\n        printf(\" %d\", a[i]);\n    }\n    printf(\"\\n\");\n    return 0;\n}",
        "samples": [
          {
            "input": "4\n7 8 9 10\n2 100",
            "expected": "Updated List: 7 100 8 9 10"
          },
          {
            "input": "2\n4 9\n2 6",
            "expected": "Updated List: 4 6 9"
          }
        ],
        "hidden_cases": [
          {
            "input": "5\n10 20 30 40 50\n3 25\n",
            "expected": "Updated List: 10 20 25 30 40 50"
          },
          {
            "input": "3\n1 2 3\n1 0\n",
            "expected": "Updated List: 0 1 2 3"
          },
          {
            "input": "4\n5 6 7 8\n5 9\n",
            "expected": "Updated List: 5 6 7 8 9"
          },
          {
            "input": "1\n100\n2 200\n",
            "expected": "Updated List: 100 200"
          }
        ],
        "inFmt": "The first line of input consists of an integer n representing the number of elements currently in the list.\n\nThe second line of input consists of n space-separated integers representing the elements of the list.\n\nThe third line of input consists of two space-separated integers pos and value, representing the position (counted from 1) at which to insert and the value to be inserted.",
        "outFmt": "The first line of output prints \"Updated List: \" followed by the elements of the updated list separated by spaces.",
        "cons": "1 ≤ n ≤ 100\n1 ≤ pos ≤ n + 1\n-1000 ≤ elements[i], value ≤ 1000"
      },
      {
        "id": "u1_c2",
        "title": "Q2. Delete a Node from a Singly Linked List",
        "ps": "Kavya works on a railway booking system that keeps the booked seat numbers of a coach in a singly linked list, in the order the bookings were made. When a passenger cancels, the first node holding that passenger's seat number has to be removed from the list while the order of all other nodes stays the same.\n\nWrite a program that builds the singly linked list from the given seat numbers, deletes the first node whose value equals the given key, and prints the remaining list. If the key is not present, report that it was not found.\n\nNote: Use the malloc() function to allocate memory for the nodes of the list.",
        "sampleIn": "3\n15 25 35\n25",
        "sampleOut": "Updated List: 15 35",
        "hidden": [
          {
            "input": "3\n15 25 35\n25\n",
            "expected": "Updated List: 15 35"
          },
          {
            "input": "4\n2 4 6 8\n5\n",
            "expected": "Key Not Found"
          },
          {
            "input": "5\n4 7 4 9 4\n4\n",
            "expected": "Updated List: 7 4 9 4"
          },
          {
            "input": "4\n1 2 3 4\n1\n",
            "expected": "Updated List: 2 3 4"
          },
          {
            "input": "4\n5 6 7 8\n8\n",
            "expected": "Updated List: 5 6 7"
          },
          {
            "input": "1\n9\n9\n",
            "expected": "Updated List: Empty"
          }
        ],
        "sol": "#include <stdio.h>\n#include <stdlib.h>\nstruct Node {\n    int data;\n    struct Node *next;\n};\nint main() {\n    int n, key;\n    struct Node *head = NULL, *tail = NULL;\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) {\n        int x;\n        scanf(\"%d\", &x);\n        struct Node *node = (struct Node *)malloc(sizeof(struct Node));\n        node->data = x;\n        node->next = NULL;\n        if (head == NULL) {\n            head = node;\n            tail = node;\n        } else {\n            tail->next = node;\n            tail = node;\n        }\n    }\n    scanf(\"%d\", &key);\n    struct Node *curr = head, *prev = NULL;\n    while (curr != NULL && curr->data != key) {\n        prev = curr;\n        curr = curr->next;\n    }\n    if (curr == NULL) {\n        printf(\"Key Not Found\\n\");\n        return 0;\n    }\n    if (prev == NULL) {\n        head = curr->next;\n    } else {\n        prev->next = curr->next;\n    }\n    free(curr);\n    if (head == NULL) {\n        printf(\"Updated List: Empty\\n\");\n        return 0;\n    }\n    printf(\"Updated List:\");\n    for (curr = head; curr != NULL; curr = curr->next) {\n        printf(\" %d\", curr->data);\n    }\n    printf(\"\\n\");\n    return 0;\n}",
        "samples": [
          {
            "input": "3\n15 25 35\n25",
            "expected": "Updated List: 15 35"
          },
          {
            "input": "4\n2 4 6 8\n5",
            "expected": "Key Not Found"
          }
        ],
        "hidden_cases": [
          {
            "input": "5\n4 7 4 9 4\n4\n",
            "expected": "Updated List: 7 4 9 4"
          },
          {
            "input": "4\n1 2 3 4\n1\n",
            "expected": "Updated List: 2 3 4"
          },
          {
            "input": "4\n5 6 7 8\n8\n",
            "expected": "Updated List: 5 6 7"
          },
          {
            "input": "1\n9\n9\n",
            "expected": "Updated List: Empty"
          }
        ],
        "inFmt": "The first line of input consists of an integer n representing the number of seat numbers in the list.\n\nThe second line of input consists of n space-separated integers representing the seat numbers in booking order.\n\nThe third line of input consists of an integer key representing the seat number to be removed.",
        "outFmt": "If the key is found, the first line of output prints \"Updated List: \" followed by the remaining seat numbers separated by spaces, or the string \"Empty\" if no node remains.\n\nIf the key is not found, the first line of output prints the string \"Key Not Found\".",
        "cons": "1 ≤ n ≤ 100\n1 ≤ seat numbers[i], key ≤ 1000"
      },
      {
        "id": "u1_c3",
        "title": "Q3. Print a Doubly Linked List in Reverse Order",
        "ps": "Aarav is developing a music player that stores the song IDs of a playlist in a doubly linked list, where every node knows both the node before it and the node after it. One of the features he wants to add is a \"play in reverse\" button that goes through the playlist from the last song back to the first.\n\nWrite a program that builds the doubly linked list from the given song IDs by adding each new node at the end, and then prints the song IDs in reverse order by starting at the last node and following the previous pointers.\n\nNote: Use the malloc() function to allocate memory for the nodes of the list.",
        "sampleIn": "3\n8 16 24",
        "sampleOut": "Reverse Order: 24 16 8",
        "hidden": [
          {
            "input": "3\n8 16 24\n",
            "expected": "Reverse Order: 24 16 8"
          },
          {
            "input": "2\n100 200\n",
            "expected": "Reverse Order: 200 100"
          },
          {
            "input": "5\n1 2 3 4 5\n",
            "expected": "Reverse Order: 5 4 3 2 1"
          },
          {
            "input": "1\n42\n",
            "expected": "Reverse Order: 42"
          },
          {
            "input": "4\n10 20 30 40\n",
            "expected": "Reverse Order: 40 30 20 10"
          },
          {
            "input": "6\n7 7 8 8 9 9\n",
            "expected": "Reverse Order: 9 9 8 8 7 7"
          }
        ],
        "sol": "#include <stdio.h>\n#include <stdlib.h>\nstruct Node {\n    int data;\n    struct Node *prev;\n    struct Node *next;\n};\nint main() {\n    int n;\n    struct Node *head = NULL, *tail = NULL;\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) {\n        int x;\n        scanf(\"%d\", &x);\n        struct Node *node = (struct Node *)malloc(sizeof(struct Node));\n        node->data = x;\n        node->next = NULL;\n        node->prev = tail;\n        if (head == NULL) {\n            head = node;\n        } else {\n            tail->next = node;\n        }\n        tail = node;\n    }\n    printf(\"Reverse Order:\");\n    for (struct Node *curr = tail; curr != NULL; curr = curr->prev) {\n        printf(\" %d\", curr->data);\n    }\n    printf(\"\\n\");\n    return 0;\n}",
        "samples": [
          {
            "input": "3\n8 16 24",
            "expected": "Reverse Order: 24 16 8"
          },
          {
            "input": "2\n100 200",
            "expected": "Reverse Order: 200 100"
          }
        ],
        "hidden_cases": [
          {
            "input": "5\n1 2 3 4 5\n",
            "expected": "Reverse Order: 5 4 3 2 1"
          },
          {
            "input": "1\n42\n",
            "expected": "Reverse Order: 42"
          },
          {
            "input": "4\n10 20 30 40\n",
            "expected": "Reverse Order: 40 30 20 10"
          },
          {
            "input": "6\n7 7 8 8 9 9\n",
            "expected": "Reverse Order: 9 9 8 8 7 7"
          }
        ],
        "inFmt": "The first line of input consists of an integer n representing the number of songs in the playlist.\n\nThe second line of input consists of n space-separated integers representing the song IDs in playlist order.",
        "outFmt": "The first line of output prints \"Reverse Order: \" followed by the song IDs from the last node to the first node separated by spaces.",
        "cons": "1 ≤ n ≤ 100\n-1000 ≤ song IDs[i] ≤ 1000"
      },
      {
        "id": "u1_c4",
        "title": "Q4. Addition of Two Polynomials Using Arrays",
        "ps": "Priya is preparing a physics lab report in which two motion equations are written as polynomials. Each polynomial is stored using an array-based Polynomial ADT, where the position of a value in the array is the exponent and the value itself is the coefficient of that exponent.\n\nWrite a program that reads two such polynomials and adds them. The coefficient of the result at exponent i is the coefficient of the first polynomial at exponent i plus the coefficient of the second polynomial at exponent i, and a missing exponent counts as 0.",
        "sampleIn": "1\n1 1\n1\n2 2",
        "sampleOut": "Sum Polynomial: 3 3",
        "hidden": [
          {
            "input": "1\n1 1\n1\n2 2\n",
            "expected": "Sum Polynomial: 3 3"
          },
          {
            "input": "2\n5 0 3\n3\n1 2 3 4\n",
            "expected": "Sum Polynomial: 6 2 6 4"
          },
          {
            "input": "2\n1 2 3\n2\n4 5 6\n",
            "expected": "Sum Polynomial: 5 7 9"
          },
          {
            "input": "3\n1 0 2 5\n1\n3 4\n",
            "expected": "Sum Polynomial: 4 4 2 5"
          },
          {
            "input": "0\n7\n0\n3\n",
            "expected": "Sum Polynomial: 10"
          },
          {
            "input": "1\n2 3\n4\n1 1 1 1 1\n",
            "expected": "Sum Polynomial: 3 4 1 1 1"
          }
        ],
        "sol": "#include <stdio.h>\nint main() {\n    int d1, d2;\n    int p[105], q[105], r[105];\n    scanf(\"%d\", &d1);\n    for (int i = 0; i <= d1; i++) {\n        scanf(\"%d\", &p[i]);\n    }\n    scanf(\"%d\", &d2);\n    for (int i = 0; i <= d2; i++) {\n        scanf(\"%d\", &q[i]);\n    }\n    int maxDeg = d1 > d2 ? d1 : d2;\n    for (int i = 0; i <= maxDeg; i++) {\n        int a = i <= d1 ? p[i] : 0;\n        int b = i <= d2 ? q[i] : 0;\n        r[i] = a + b;\n    }\n    printf(\"Sum Polynomial:\");\n    for (int i = 0; i <= maxDeg; i++) {\n        printf(\" %d\", r[i]);\n    }\n    printf(\"\\n\");\n    return 0;\n}",
        "samples": [
          {
            "input": "1\n1 1\n1\n2 2",
            "expected": "Sum Polynomial: 3 3"
          },
          {
            "input": "2\n5 0 3\n3\n1 2 3 4",
            "expected": "Sum Polynomial: 6 2 6 4"
          }
        ],
        "hidden_cases": [
          {
            "input": "2\n1 2 3\n2\n4 5 6\n",
            "expected": "Sum Polynomial: 5 7 9"
          },
          {
            "input": "3\n1 0 2 5\n1\n3 4\n",
            "expected": "Sum Polynomial: 4 4 2 5"
          },
          {
            "input": "0\n7\n0\n3\n",
            "expected": "Sum Polynomial: 10"
          },
          {
            "input": "1\n2 3\n4\n1 1 1 1 1\n",
            "expected": "Sum Polynomial: 3 4 1 1 1"
          }
        ],
        "inFmt": "The first line of input consists of an integer d1 representing the degree of the first polynomial.\n\nThe second line of input consists of d1 + 1 space-separated integers representing the coefficients of the first polynomial from exponent 0 up to exponent d1.\n\nThe third line of input consists of an integer d2 representing the degree of the second polynomial.\n\nThe fourth line of input consists of d2 + 1 space-separated integers representing the coefficients of the second polynomial from exponent 0 up to exponent d2.",
        "outFmt": "The first line of output prints \"Sum Polynomial: \" followed by the coefficients of the resulting polynomial from exponent 0 up to the larger of d1 and d2, separated by spaces.",
        "cons": "0 ≤ d1, d2 ≤ 50\n-100 ≤ coefficients ≤ 100"
      }
    ]
  },
  "u2": {
    "name": "Unit 2: Stacks & Queues",
    "mcq": [
      {
        "id": "u2_m1",
        "q": "In an array-based stack of size MAX where top starts at -1, which condition indicates that the stack is full?",
        "o": [
          "top == -1",
          "top == 0",
          "top == MAX - 1",
          "top == MAX"
        ],
        "a": 2
      },
      {
        "id": "u2_m2",
        "q": "Which of the following is an application of a stack?",
        "o": [
          "Undo feature in text editors",
          "Printer job spooling",
          "Round-robin CPU scheduling",
          "Ticket counter simulation"
        ],
        "a": 0
      },
      {
        "id": "u2_m3",
        "q": "What is stack underflow?",
        "o": [
          "Pushing an element onto a full stack",
          "Popping an element from an empty stack",
          "Pushing the same value twice",
          "Reading the top of a full stack"
        ],
        "a": 1
      },
      {
        "id": "u2_m4",
        "q": "Which stack operation removes the top element of the stack?",
        "o": [
          "push",
          "peek",
          "isEmpty",
          "pop"
        ],
        "a": 3
      },
      {
        "id": "u2_m5",
        "q": "Which principle does a stack follow for inserting and removing elements?",
        "o": [
          "FIFO",
          "LIFO",
          "Random access",
          "Priority order"
        ],
        "a": 1
      },
      {
        "id": "u2_m6",
        "q": "Which of the following is an application of a queue?",
        "o": [
          "Reversing a string",
          "Checking balanced parentheses",
          "Evaluating postfix expressions",
          "CPU scheduling and printer spooling"
        ],
        "a": 3
      },
      {
        "id": "u2_m7",
        "q": "During infix to postfix conversion, which symbols are held on the stack?",
        "o": [
          "Only operands",
          "Only the final postfix string",
          "Only right parentheses",
          "Operators and left parentheses"
        ],
        "a": 3
      },
      {
        "id": "u2_m8",
        "q": "In a queue, at which ends do insertion and deletion take place?",
        "o": [
          "Insert at front, delete at rear",
          "Insert and delete at the front",
          "Insert at rear, delete at front",
          "Insert and delete at the rear"
        ],
        "a": 2
      },
      {
        "id": "u2_m9",
        "q": "Which data structure is used to keep track of active function calls and their return addresses?",
        "o": [
          "A stack",
          "A queue",
          "A binary tree",
          "A hash table"
        ],
        "a": 0
      },
      {
        "id": "u2_m10",
        "q": "Which data structure is used to check whether symbols such as (), {} and [] in an expression are balanced?",
        "o": [
          "Queue",
          "Binary tree",
          "Stack",
          "Hash table"
        ],
        "a": 2
      },
      {
        "id": "u2_m11",
        "q": "Which queue operation adds an element at the rear of the queue?",
        "o": [
          "push",
          "enqueue",
          "pop",
          "dequeue"
        ],
        "a": 1
      },
      {
        "id": "u2_m12",
        "q": "What does a double-ended queue (deque) allow?",
        "o": [
          "Insertion and deletion at both front and rear",
          "Insertion at front only and deletion at rear only",
          "Insertion at rear only and deletion at front only",
          "Insertion and deletion only in the middle"
        ],
        "a": 0
      },
      {
        "id": "u2_m13",
        "q": "While evaluating a postfix expression using a stack, what is done when an operand is encountered?",
        "o": [
          "It is printed immediately",
          "It is discarded",
          "It is applied to the two operators below it",
          "It is pushed onto the stack"
        ],
        "a": 3
      },
      {
        "id": "u2_m14",
        "q": "Which statement correctly moves rear to its next position in a circular queue of size MAX?",
        "o": [
          "rear = rear + 1",
          "rear = rear - 1",
          "rear = (rear + 1) % MAX",
          "rear = rear * MAX"
        ],
        "a": 2
      },
      {
        "id": "u2_m15",
        "q": "What is the postfix form of the infix expression A + B * C?",
        "o": [
          "AB+C*",
          "ABC*+",
          "ABC+*",
          "+A*BC"
        ],
        "a": 1
      },
      {
        "id": "u2_m16",
        "q": "What is the output of the following C code?",
        "code": "#include <stdio.h>\nvoid show(int n) {\n    if (n == 0)\n        return;\n    printf(\"%d \", n);\n    show(n - 1);\n    printf(\"%d \", n);\n}\nint main() {\n    show(3);\n    return 0;\n}",
        "o": [
          "3 2 1 1 2 3",
          "3 2 1",
          "1 2 3 3 2 1",
          "3 3 2 2 1 1"
        ],
        "a": 0
      },
      {
        "id": "u2_m17",
        "q": "What is the output of the following C code, which evaluates the postfix expression 8 3 -?",
        "code": "#include <stdio.h>\nint main() {\n    int s[10], top = -1, a, b;\n    s[++top] = 8;\n    s[++top] = 3;\n    b = s[top--];\n    a = s[top--];\n    s[++top] = a - b;\n    printf(\"%d\", s[top]);\n    return 0;\n}",
        "o": [
          "5",
          "-5",
          "11",
          "24"
        ],
        "a": 0
      },
      {
        "id": "u2_m18",
        "q": "What is the output of the following C code?",
        "code": "#include <stdio.h>\nint main() {\n    int stack[5], top = -1;\n    stack[++top] = 10;\n    stack[++top] = 20;\n    stack[++top] = 30;\n    top--;\n    printf(\"%d %d\", stack[top], top);\n    return 0;\n}",
        "o": [
          "30 2",
          "20 1",
          "20 2",
          "30 1"
        ],
        "a": 1
      },
      {
        "id": "u2_m19",
        "q": "What is the output of the following C code?",
        "code": "#include <stdio.h>\nint main() {\n    int q[5], front = 0, rear = -1;\n    q[++rear] = 5;\n    q[++rear] = 10;\n    q[++rear] = 15;\n    front++;\n    printf(\"%d %d\", q[front], rear - front + 1);\n    return 0;\n}",
        "o": [
          "5 3",
          "10 3",
          "10 2",
          "15 2"
        ],
        "a": 2
      },
      {
        "id": "u2_m20",
        "q": "What is the output of the following C code?",
        "code": "#include <stdio.h>\nint main() {\n    int max = 5, rear = 3, i;\n    for (i = 0; i < 3; i++) {\n        rear = (rear + 1) % max;\n        printf(\"%d \", rear);\n    }\n    return 0;\n}",
        "o": [
          "4 5 6",
          "3 4 0",
          "0 1 2",
          "4 0 1"
        ],
        "a": 3
      }
    ],
    "debug": [
      {
        "id": "u2_d1",
        "title": "Q1. Stack Implementation using Array",
        "ps": "Meena runs the plate counter of a canteen, where clean plates are stacked in a holder that can carry only a fixed number of plates. A new plate goes on the top of the stack (push), the top plate is taken away when a customer needs it (pop), and sometimes she only wants to see which plate is on the top without removing it (peek).\n\nThe functions push(), pop() and peek() in the editable area implement this stack using an array, but the code contains errors. Debug the code so that the program prints the expected output.",
        "inFmt": "The first line contains an integer c representing the capacity of the stack. The second line contains an integer m representing the number of operations. Each of the next m lines contains two integers t and x, where t is the operation type:\n\n1 for push, 2 for pop, 3 for peek.\n\nFor operations 2 and 3, x is 0 and should be ignored.",
        "outFmt": "For a push attempted when the stack is full, print \"Stack Overflow\". For a successful push, print nothing.\n\nFor every pop, print \"Popped: \" followed by the removed value, or \"Stack Underflow\" if the stack is empty.\n\nFor every peek, print \"Top: \" followed by the top value, or \"Stack is empty\" if the stack is empty.",
        "cons": "1 ≤ c ≤ 100\n1 ≤ m ≤ 50\n1≤t≤3\n0 ≤ x ≤ 1000",
        "sampleIn": "2\n2\n1 7\n3 0",
        "sampleOut": "Top: 7",
        "header": "#include <stdio.h>\nint stack[105];\nint top = -1;\nint capacity;",
        "buggy": "void push(int x) {\n  if (top == capacity) {\n    printf(\"Stack Overflow\\n\");\n    return;\n  }\n  stack[top++] = x;\n}\nvoid pop() {\n  if (top == -1) {\n    printf(\"Stack Underflow\\n\");\n    return;\n  }\n  top--;\n  printf(\"Popped: %d\\n\", stack[top]);\n}\nvoid peek() {\n  if (top == -1) {\n    printf(\"Stack is empty\\n\");\n    return;\n  }\n  printf(\"Top: %d\\n\", stack[top--]);\n}",
        "footer": "void process(int t, int x) {\n  if (t == 1)\n    push(x);\n  else if (t == 2)\n    pop();\n  else\n    peek();\n}\nint main() {\n  int m;\n  scanf(\"%d\", &capacity);\n  scanf(\"%d\", &m);\n  for (int i = 0; i < m; i++) {\n    int t, x;\n    scanf(\"%d %d\", &t, &x);\n    process(t, x);\n  }\n  return 0;\n}",
        "samples": [
          {
            "input": "2\n2\n1 7\n3 0",
            "expected": "Top: 7"
          },
          {
            "input": "1\n1\n2 0",
            "expected": "Stack Underflow"
          }
        ],
        "hidden_cases": [
        {
          "input": "4\n8\n1 88\n1 61\n1 84\n1 55\n1 6\n3 0\n1 38\n1 72",
          "expected": "Stack Overflow\nTop: 55\nStack Overflow\nStack Overflow"
        },
        {
          "input": "4\n4\n1 31\n3 0\n3 0\n1 59",
          "expected": "Top: 31\nTop: 31"
        },
        {
          "input": "1\n9\n1 32\n1 71\n2 0\n1 92\n1 62\n1 63\n1 40\n2 0\n3 0",
          "expected": "Stack Overflow\nPopped: 32\nStack Overflow\nStack Overflow\nStack Overflow\nPopped: 92\nStack is empty"
        },
        {
          "input": "2\n7\n1 97\n3 0\n1 30\n3 0\n3 0\n1 20\n2 0",
          "expected": "Top: 97\nTop: 30\nTop: 30\nStack Overflow\nPopped: 30"
        },
        {
          "input": "2\n4\n1 37\n2 0\n1 56\n3 0",
          "expected": "Popped: 37\nTop: 56"
        },
        {
          "input": "4\n7\n1 99\n1 37\n3 0\n1 86\n3 0\n3 0\n1 69",
          "expected": "Top: 37\nTop: 86\nTop: 86"
        }
      ],
        "sol": "void push(int x) {\n  if (top == capacity - 1) {\n    printf(\"Stack Overflow\\n\");\n    return;\n  }\n  top++;\n  stack[top] = x;\n}\nvoid pop() {\n  if (top == -1) {\n    printf(\"Stack Underflow\\n\");\n    return;\n  }\n  printf(\"Popped: %d\\n\", stack[top]);\n  top--;\n}\nvoid peek() {\n  if (top == -1) {\n    printf(\"Stack is empty\\n\");\n    return;\n  }\n  printf(\"Top: %d\\n\", stack[top]);\n}"
      },
      {
        "id": "u2_d2",
        "title": "Q2. Infix to Postfix Conversion",
        "ps": "Lakshmi is writing the expression module of a calculator app. Users type expressions in the usual infix form, such as a+b*c, but the calculator evaluates them in postfix form, so every expression must be converted first.\n\nThe conversion uses a stack of operators. Operands go straight to the output, an opening bracket is pushed, a closing bracket pops operators until the matching opening bracket, and an operator first pops every operator on the stack with an equal or higher precedence before it is pushed. The operators * and / have higher precedence than + and -.\n\nThe function infixToPostfix() in the editable area is meant to print the postfix form, but the code contains errors. Debug the code so that the program prints the expected output.",
        "inFmt": "The first line contains a string s representing the infix expression without spaces.",
        "outFmt": "Print \"Postfix: \" followed by the postfix form of the expression.",
        "cons": "1 ≤ length of s ≤ 50\ns contains lowercase letters as operands, the operators +, -, *, / and brackets ( ).",
        "sampleIn": "x*y+z",
        "sampleOut": "Postfix: xy*z+",
        "header": "#include <stdio.h>\nint precedence(char c) {\n  if (c == '*' || c == '/') return 2;\n  if (c == '+' || c == '-') return 1;\n  return 0;\n}",
        "buggy": "void infixToPostfix(char s[]) {\n  char stack[105];\n  int top = -1;\n  printf(\"Postfix: \");\n  for (int i = 0; s[i] != '\\0'; i++) {\n    char c = s[i];\n    if (c >= 'a' && c <= 'z') {\n      printf(\"%c\", c);\n    } else if (c == '(') {\n      top++;\n      stack[top] = c;\n    } else if (c == ')') {\n      while (top >= 0 && stack[top] != '(') {\n        printf(\"%c\", stack[top]);\n        top--;\n      }\n    } else {\n      while (top >= 0 && precedence(stack[top]) >\n                             precedence(c)) {\n        printf(\"%c\", stack[top]);\n        top--;\n      }\n      top++;\n      stack[top] = c;\n    }\n  }\n  printf(\"\\n\");\n}",
        "footer": "int main() {\n  char s[55];\n  scanf(\"%s\", s);\n  infixToPostfix(s);\n  return 0;\n}",
        "samples": [
          {
            "input": "x*y+z",
            "expected": "Postfix: xy*z+"
          },
          {
            "input": "p+q-r",
            "expected": "Postfix: pq+r-"
          }
        ],
        "hidden_cases": [
        {
          "input": "(x+c/(x-b))",
          "expected": "Postfix: xcxb-/+"
        },
        {
          "input": "(z*z)+(d/y)",
          "expected": "Postfix: zz*dy/+"
        },
        {
          "input": "a/z+b*a",
          "expected": "Postfix: az/ba*+"
        },
        {
          "input": "(b/(d/c))",
          "expected": "Postfix: bdc//"
        },
        {
          "input": "(b/c*z)",
          "expected": "Postfix: bc/z*"
        },
        {
          "input": "y-d*d",
          "expected": "Postfix: ydd*-"
        }
      ],
        "sol": "void infixToPostfix(char s[]) {\n  char stack[105];\n  int top = -1;\n  printf(\"Postfix: \");\n  for (int i = 0; s[i] != '\\0'; i++) {\n    char c = s[i];\n    if (c >= 'a' && c <= 'z') {\n      printf(\"%c\", c);\n    } else if (c == '(') {\n      top++;\n      stack[top] = c;\n    } else if (c == ')') {\n      while (top >= 0 && stack[top] != '(') {\n        printf(\"%c\", stack[top]);\n        top--;\n      }\n      if (top >= 0 && stack[top] == '(') top--;\n    } else {\n      while (top >= 0 && stack[top] != '(' &&\n             precedence(stack[top]) >= precedence(c)) {\n        printf(\"%c\", stack[top]);\n        top--;\n      }\n      top++;\n      stack[top] = c;\n    }\n  }\n  while (top >= 0) {\n    if (stack[top] != '(') printf(\"%c\", stack[top]);\n    top--;\n  }\n  printf(\"\\n\");\n}"
      },
      {
        "id": "u2_d3",
        "title": "Q3. Reverse a Word using a Stack",
        "ps": "Vikram creates a word game in which the player types a word and the game shows its mirror image, which is the same word written backwards. Since a stack gives out the items in the opposite order to the order in which they were put in, he pushes every letter of the word onto a stack and then pops all the letters to print them.\n\nThe function reverseWord() in the editable area is meant to print the reversed word using a stack, but the code contains errors. Debug the code so that the program prints the expected output.",
        "inFmt": "The first line contains a string s representing the word typed by the player, without spaces.",
        "outFmt": "Print \"Reversed: \" followed by the letters of the word in reverse order.",
        "cons": "1 ≤ length of s ≤ 100\ns contains only English letters.",
        "sampleIn": "queue",
        "sampleOut": "Reversed: eueuq",
        "header": "#include <stdio.h>\n#include <string.h>",
        "buggy": "void reverseWord(char s[]) {\n  char stack[105];\n  int top = -1;\n  int len = strlen(s);\n  for (int i = 0; i <= len; i++) {\n    top++;\n    stack[top] = s[i];\n  }\n  printf(\"Reversed:\");\n  while (top > 0) {\n    printf(\"%c\", stack[top]);\n    top--;\n  }\n  printf(\"\\n\");\n}",
        "footer": "int main() {\n  char s[105];\n  scanf(\"%s\", s);\n  reverseWord(s);\n  return 0;\n}",
        "samples": [
          {
            "input": "queue",
            "expected": "Reversed: eueuq"
          },
          {
            "input": "tree",
            "expected": "Reversed: eert"
          }
        ],
        "hidden_cases": [
          {
            "input": "queue",
            "expected": "Reversed: eueuq"
          },
          {
            "input": "tree",
            "expected": "Reversed: eert"
          },
          {
            "input": "a",
            "expected": "Reversed: a"
          },
          {
            "input": "level",
            "expected": "Reversed: level"
          },
          {
            "input": "Programming",
            "expected": "Reversed: gnimmargorP"
          },
          {
            "input": "DataStructures",
            "expected": "Reversed: serutcurtSataD"
          }
        ],
        "sol": "void reverseWord(char s[]) {\n  char stack[105];\n  int top = -1;\n  int len = strlen(s);\n  for (int i = 0; i < len; i++) {\n    top++;\n    stack[top] = s[i];\n  }\n  printf(\"Reversed: \");\n  while (top >= 0) {\n    printf(\"%c\", stack[top]);\n    top--;\n  }\n  printf(\"\\n\");\n}"
      },
      {
        "id": "u2_d4",
        "title": "Q4. Linear Queue Implementation using Array",
        "ps": "Sanjay manages the token system of a bank branch. Customers take a token and are served in the order they arrived, so the tokens are kept in a queue stored in a simple linear array with a fixed capacity.\n\nA new token is added at the rear, the token at the front is served next, and the counter display can also show which token is at the front without serving it. In this simple array queue, the rear index only moves forward, so the space of tokens that were already served is not reused.\n\nThe functions enqueue(), dequeue() and showFront() in the editable area implement this queue, but the code contains errors. Debug the code so that the program prints the expected output.",
        "inFmt": "The first line contains an integer c representing the capacity of the queue. The second line contains an integer m representing the number of operations. Each of the next m lines contains two integers t and x, where t is the operation type:\n\n1 for enqueue, 2 for dequeue, 3 for front.\n\nFor operations 2 and 3, x is 0 and should be ignored.",
        "outFmt": "For an enqueue attempted when the rear has reached the capacity, print \"Queue Overflow\".\n\nFor a successful enqueue, print nothing.\n\nFor every dequeue, print \"Dequeued: \" followed by the removed token, or \"Queue Underflow\" if the queue is empty.\n\nFor every front operation, print \"Front: \" followed by the token at the front, or \"Queue is empty\" if the queue is empty.",
        "cons": "1 ≤ c ≤ 100\n1 ≤ m ≤ 50\n1≤t≤3\n0 ≤ x ≤ 1000",
        "sampleIn": "2\n3\n1 7\n1 8\n3 0",
        "sampleOut": "Front: 7",
        "header": "#include <stdio.h>\nint queue[105];\nint front = -1;\nint rear = -1;\nint capacity;",
        "buggy": "void enqueue(int x) {\n  if (rear == capacity) {\n    printf(\"Queue Overflow\\n\");\n    return;\n  }\n  if (front == -1) front = 0;\n  queue[++rear] = x;\n}\nvoid dequeue() {\n  if (front == -1) {\n    printf(\"Queue Underflow\\n\");\n    return;\n  }\n  printf(\"Dequeued: %d\\n\", queue[front]);\n  front++;\n}\nvoid showFront() {\n  if (front == -1 || front > rear) {\n    printf(\"Queue is empty\\n\");\n    return;\n  }\n  printf(\"Front: %d\\n\", queue[front++]);\n}",
        "footer": "void process(int t, int x) {\n  if (t == 1)\n    enqueue(x);\n  else if (t == 2)\n    dequeue();\n  else\n    showFront();\n}\nint main() {\n  int m;\n  scanf(\"%d\", &capacity);\n  scanf(\"%d\", &m);\n  for (int i = 0; i < m; i++) {\n    int t, x;\n    scanf(\"%d %d\", &t, &x);\n    process(t, x);\n  }\n  return 0;\n}",
        "samples": [
          {
            "input": "2\n3\n1 7\n1 8\n3 0",
            "expected": "Front: 7"
          },
          {
            "input": "3\n1\n2 0",
            "expected": "Queue Underflow"
          }
        ],
        "hidden_cases": [
        {
          "input": "3\n7\n2 0\n1 20\n1 33\n3 0\n1 71\n3 0\n3 0",
          "expected": "Queue Underflow\nFront: 20\nFront: 20\nFront: 20"
        },
        {
          "input": "4\n7\n1 41\n3 0\n3 0\n2 0\n1 54\n1 74\n2 0",
          "expected": "Front: 41\nFront: 41\nDequeued: 41\nDequeued: 54"
        },
        {
          "input": "1\n3\n1 77\n2 0\n1 20",
          "expected": "Dequeued: 77\nQueue Overflow"
        },
        {
          "input": "1\n5\n1 8\n3 0\n1 9\n1 7\n1 27",
          "expected": "Front: 8\nQueue Overflow\nQueue Overflow\nQueue Overflow"
        },
        {
          "input": "4\n3\n1 40\n3 0\n2 0",
          "expected": "Front: 40\nDequeued: 40"
        },
        {
          "input": "4\n8\n2 0\n1 44\n1 80\n1 73\n3 0\n1 64\n2 0\n1 53",
          "expected": "Queue Underflow\nFront: 44\nDequeued: 44\nQueue Overflow"
        }
      ],
        "sol": "void enqueue(int x) {\n  if (rear == capacity - 1) {\n    printf(\"Queue Overflow\\n\");\n    return;\n  }\n  if (front == -1) front = 0;\n  queue[++rear] = x;\n}\nvoid dequeue() {\n  if (front == -1 || front > rear) {\n    printf(\"Queue Underflow\\n\");\n    return;\n  }\n  printf(\"Dequeued: %d\\n\", queue[front]);\n  front++;\n}\nvoid showFront() {\n  if (front == -1 || front > rear) {\n    printf(\"Queue is empty\\n\");\n    return;\n  }\n  printf(\"Front: %d\\n\", queue[front]);\n}"
      },
      {
        "id": "u2_d5",
        "title": "Q5. Hot Potato Game using a Queue",
        "ps": "Farah organises the hot potato game at a children's party. The n children, numbered 1 to n, stand in a line in that order and are kept in a queue. In every round, the first k - 1 children of the queue pass the potato on and go to the back of the queue in the same order, and then the k-th child at the front holds the potato when the music stops and leaves the game. The rounds continue until only one child is left, who is the winner.\n\nThe function hotPotato() in the editable area is meant to print every child who leaves the game and then the winner, but the code contains errors. Debug the code so that the program prints the expected output.",
        "inFmt": "The first line contains two space-separated integers n and k representing the number of children and the counting number used in every round.",
        "outFmt": "Print \"Eliminated: \" followed by the number of the child who leaves in each round, one child per line, in the order they leave.\n\nThe last line prints \"Winner: \" followed by the number of the child who is left.",
        "cons": "1 ≤ n ≤ 20\n1 ≤ k ≤ 10",
        "sampleIn": "3 2",
        "sampleOut": "Eliminated: 2\nEliminated: 1\nWinner: 3",
        "header": "#include <stdio.h>",
        "buggy": "void hotPotato(int n, int k) {\n  int queue[505];\n  int front = 0, rear = 0;\n  for (int i = 1; i <= n; i++) {\n    queue[rear] = i;\n    rear++;\n  }\n  while (rear - front > 0) {\n    for (int j = 0; j < k; j++) {\n      queue[rear] = queue[front];\n      rear++;\n      front++;\n    }\n    printf(\"Eliminated: %d\\n\", queue[front]);\n    front++;\n  }\n}",
        "footer": "int main() {\n  int n, k;\n  scanf(\"%d %d\", &n, &k);\n  hotPotato(n, k);\n  return 0;\n}",
        "samples": [
          {
            "input": "3 2",
            "expected": "Eliminated: 2\nEliminated: 1\nWinner: 3"
          },
          {
            "input": "5 3",
            "expected": "Eliminated: 3\nEliminated: 1\nEliminated: 5\nEliminated: 2\nWinner: 4"
          }
        ],
        "hidden_cases": [
          {
            "input": "3 2",
            "expected": "Eliminated: 2\nEliminated: 1\nWinner: 3"
          },
          {
            "input": "5 3",
            "expected": "Eliminated: 3\nEliminated: 1\nEliminated: 5\nEliminated: 2\nWinner: 4"
          },
          {
            "input": "1 3",
            "expected": "Winner: 1"
          },
          {
            "input": "4 1",
            "expected": "Eliminated: 1\nEliminated: 2\nEliminated: 3\nWinner: 4"
          },
          {
            "input": "7 5",
            "expected": "Eliminated: 5\nEliminated: 3\nEliminated: 2\nEliminated: 4\nEliminated: 7\nEliminated: 1\nWinner: 6"
          },
          {
            "input": "10 4",
            "expected": "Eliminated: 4\nEliminated: 8\nEliminated: 2\nEliminated: 7\nEliminated: 3\nEliminated: 10\nEliminated: 9\nEliminated: 1\nEliminated: 6\nWinner: 5"
          }
        ],
        "sol": "void hotPotato(int n, int k) {\n  int queue[505];\n  int front = 0, rear = 0;\n  for (int i = 1; i <= n; i++) {\n    queue[rear] = i;\n    rear++;\n  }\n  while (rear - front > 1) {\n    for (int j = 1; j < k; j++) {\n      queue[rear] = queue[front];\n      rear++;\n      front++;\n    }\n    printf(\"Eliminated: %d\\n\", queue[front]);\n    front++;\n  }\n  printf(\"Winner: %d\\n\", queue[front]);\n}"
      }],
    "cod": [
      {
        "id": "u2_c1",
        "title": "Q1. BALANCED BRACKETS USING STACK",
        "ps": "Nikhil is building a small code editor and wants it to warn the programmer whenever the brackets in a line of code are not properly balanced. A line is balanced when every opening bracket has a matching closing bracket of the same kind, and the brackets are closed in the correct order.\n\nWrite a program that reads a string made only of the symbols (, ), [, ], {, and } and uses a stack to decide whether the brackets are balanced. Push every opening bracket onto the stack, and for every closing bracket, check that the top of the stack holds its matching opening bracket before removing it.",
        "sampleIn": "(())",
        "sampleOut": "Balanced",
        "hidden": [
          {
            "input": "(())\n",
            "expected": "Balanced"
          },
          {
            "input": "{[}\n",
            "expected": "Not Balanced"
          },
          {
            "input": "()[]{}\n",
            "expected": "Balanced"
          },
          {
            "input": "([{}])\n",
            "expected": "Balanced"
          },
          {
            "input": "(]\n",
            "expected": "Not Balanced"
          },
          {
            "input": ")(\n",
            "expected": "Not Balanced"
          }
        ],
        "sol": "#include <stdio.h>\nint main() {\n    char s[105];\n    char stack[105];\n    int top = -1;\n    int balanced = 1;\n    scanf(\"%s\", s);\n    for (int i = 0; s[i] != '\\0'; i++) {\n        char c = s[i];\n        if (c == '(' || c == '[' || c == '{') {\n            top++;\n            stack[top] = c;\n        } else {\n            if (top < 0) {\n                balanced = 0;\n                break;\n            }\n            char open = stack[top];\n            top--;\n            if ((c == ')' && open != '(') ||\n                (c == ']' && open != '[') ||\n                (c == '}' && open != '{')) {\n                balanced = 0;\n                break;\n            }\n        }\n    }\n    if (top >= 0) {\n        balanced = 0;\n    }\n    if (balanced) {\n        printf(\"Balanced\\n\");\n    } else {\n        printf(\"Not Balanced\\n\");\n    }\n    return 0;\n}",
        "samples": [
          {
            "input": "(())",
            "expected": "Balanced"
          },
          {
            "input": "{[}",
            "expected": "Not Balanced"
          }
        ],
        "hidden_cases": [
          {
            "input": "()[]{}\n",
            "expected": "Balanced"
          },
          {
            "input": "([{}])\n",
            "expected": "Balanced"
          },
          {
            "input": "(]\n",
            "expected": "Not Balanced"
          },
          {
            "input": ")(\n",
            "expected": "Not Balanced"
          }
        ],
        "inFmt": "The first line contains a string s representing the bracket sequence with no spaces.",
        "outFmt": "Print \"Balanced\" if the brackets in s are balanced, or \"Not Balanced\" otherwise.",
        "cons": "1 ≤ length of s ≤ 100\ns contains only the characters ( ) [ ] { }"
      },
      {
        "id": "u2_c2",
        "title": "Q2. EVALUATE POSTFIX EXPRESSION USING STACK",
        "ps": "Meena is writing the calculator module of a billing machine. The module receives each arithmetic expression in postfix form, where the operator is written after its two operands, because postfix expressions need no brackets and are easy to evaluate with a stack.\n\nWrite a program that reads a postfix expression made of single-digit operands and the operators +, -, *, and /, and evaluates it using a stack. Scan the expression from left to right: push every operand, and for every operator pop the top two values, apply the operator with the earlier popped value as the right operand, and push the result back.\n\nNote: The division operator performs integer division, truncating the result toward zero.",
        "sampleIn": "45*",
        "sampleOut": "Result: 20",
        "hidden": [
          {
            "input": "45*\n",
            "expected": "Result: 20"
          },
          {
            "input": "84/5+\n",
            "expected": "Result: 7"
          },
          {
            "input": "23+\n",
            "expected": "Result: 5"
          },
          {
            "input": "53-2*\n",
            "expected": "Result: 4"
          },
          {
            "input": "82/3+\n",
            "expected": "Result: 7"
          },
          {
            "input": "234*+\n",
            "expected": "Result: 14"
          }
        ],
        "sol": "#include <stdio.h>\nint main() {\n    char s[55];\n    int stack[55];\n    int top = -1;\n    scanf(\"%s\", s);\n    for (int i = 0; s[i] != '\\0'; i++) {\n        char c = s[i];\n        if (c >= '0' && c <= '9') {\n            top++;\n            stack[top] = c - '0';\n        } else {\n            int b = stack[top];\n            top--;\n            int a = stack[top];\n            top--;\n            int res = 0;\n            if (c == '+') res = a + b;\n            else if (c == '-') res = a - b;\n            else if (c == '*') res = a * b;\n            else if (c == '/') res = a / b;\n            top++;\n            stack[top] = res;\n        }\n    }\n    printf(\"Result: %d\\n\", stack[top]);\n    return 0;\n}",
        "samples": [
          {
            "input": "45*",
            "expected": "Result: 20"
          },
          {
            "input": "84/5+",
            "expected": "Result: 7"
          }
        ],
        "hidden_cases": [
          {
            "input": "23+\n",
            "expected": "Result: 5"
          },
          {
            "input": "53-2*\n",
            "expected": "Result: 4"
          },
          {
            "input": "82/3+\n",
            "expected": "Result: 7"
          },
          {
            "input": "234*+\n",
            "expected": "Result: 14"
          }
        ],
        "inFmt": "The first line contains a string s representing the postfix expression with no spaces.",
        "outFmt": "Print \"Result: \" followed by an integer representing the value of the expression.",
        "cons": "1 ≤ length of s ≤ 50\ns is a valid postfix expression containing the digits 0 to 9 and the operators + - * /\nNo division by zero occurs in the test cases.\nEvery intermediate and final result fits in a 32-bit signed integer."
      },
      {
        "id": "u2_c3",
        "title": "Q3. CIRCULAR QUEUE IMPLEMENTATION",
        "ps": "Farhan manages a ticket counter at a small cinema where customers collect numbered tokens and wait in a queue. The waiting area has room for only a fixed number of tokens, so he stores them in a circular queue, where the position after the last slot of the array wraps back to the first slot, and freed slots at the front can be reused.\n\nWrite a program that processes a list of operations on a circular queue of a given capacity. Operation 1 followed by a token number adds the token at the rear, and operation 2 removes the token at the front. Report every attempt that fails, and print the contents of the queue at the end.",
        "sampleIn": "2\n3\n1 7\n1 8\n2",
        "sampleOut": "Dequeued: 7\nQueue: 8",
        "hidden": [
          {
            "input": "2\n3\n1 7\n1 8\n2\n",
            "expected": "Dequeued: 7\nQueue: 8"
          },
          {
            "input": "3\n2\n2\n2\n",
            "expected": "Queue is empty\nQueue is empty\nQueue: Empty"
          },
          {
            "input": "3\n4\n1 10\n1 20\n1 30\n2\n",
            "expected": "Dequeued: 10\nQueue: 20 30"
          },
          {
            "input": "2\n4\n2\n1 5\n1 6\n1 7\n",
            "expected": "Queue is empty\nQueue is full\nQueue: 5 6"
          },
          {
            "input": "3\n7\n1 1\n1 2\n1 3\n2\n2\n1 4\n1 5\n",
            "expected": "Dequeued: 1\nDequeued: 2\nQueue: 3 4 5"
          },
          {
            "input": "4\n4\n1 9\n2\n2\n1 8\n",
            "expected": "Dequeued: 9\nQueue is empty\nQueue: 8"
          }
        ],
        "sol": "#include <stdio.h>\nint main() {\n    int c, m;\n    int q[105];\n    int front = 0, rear = 0, count = 0;\n    scanf(\"%d\", &c);\n    scanf(\"%d\", &m);\n    for (int i = 0; i < m; i++) {\n        int t;\n        scanf(\"%d\", &t);\n        if (t == 1) {\n            int x;\n            scanf(\"%d\", &x);\n            if (count == c) {\n                printf(\"Queue is full\\n\");\n            } else {\n                q[rear] = x;\n                rear = (rear + 1) % c;\n                count++;\n            }\n        } else {\n            if (count == 0) {\n                printf(\"Queue is empty\\n\");\n            } else {\n                printf(\"Dequeued: %d\\n\", q[front]);\n                front = (front + 1) % c;\n                count--;\n            }\n        }\n    }\n    if (count == 0) {\n        printf(\"Queue: Empty\\n\");\n    } else {\n        printf(\"Queue:\");\n        for (int i = 0; i < count; i++) {\n            printf(\" %d\", q[(front + i) % c]);\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}",
        "samples": [
          {
            "input": "2\n3\n1 7\n1 8\n2",
            "expected": "Dequeued: 7\nQueue: 8"
          },
          {
            "input": "3\n2\n2\n2",
            "expected": "Queue is empty\nQueue is empty\nQueue: Empty"
          }
        ],
        "hidden_cases": [
          {
            "input": "3\n4\n1 10\n1 20\n1 30\n2\n",
            "expected": "Dequeued: 10\nQueue: 20 30"
          },
          {
            "input": "2\n4\n2\n1 5\n1 6\n1 7\n",
            "expected": "Queue is empty\nQueue is full\nQueue: 5 6"
          },
          {
            "input": "3\n7\n1 1\n1 2\n1 3\n2\n2\n1 4\n1 5\n",
            "expected": "Dequeued: 1\nDequeued: 2\nQueue: 3 4 5"
          },
          {
            "input": "4\n4\n1 9\n2\n2\n1 8\n",
            "expected": "Dequeued: 9\nQueue is empty\nQueue: 8"
          }
        ],
        "inFmt": "The first line contains an integer c representing the capacity of the circular queue.\n\nThe second line contains an integer m representing the number of operations.\n\nEach of the next m lines consists of either two space-separated integers \"1 x\", representing an insertion of the token number x, or a single integer \"2\", representing a removal from the front.",
        "outFmt": "For every insertion attempted when the queue is full, print \"Queue is full\". A successful insertion prints nothing.\n\nFor every removal, print \"Dequeued: \" followed by the removed token number, or \"Queue is empty\" if there is no token to remove.\n\nThe last line prints \"Queue: \" followed by the tokens from front to rear separated by spaces, or \"Queue: Empty\" if the queue has no tokens.",
        "cons": "1 ≤ c ≤ 100\n1 ≤ m ≤ 50\n1 ≤ x ≤ 1000"
      },
      {
        "id": "u2_c4",
        "title": "Q4. DOUBLE-ENDED QUEUE (DEQUE) IMPLEMENTATION",
        "ps": "Imran runs the order desk of a busy bakery. Urgent orders are added at the front of the order line, regular orders are added at the rear, and the kitchen may take the next order from either end depending on how busy the two ovens are. This is exactly the behaviour of a double-ended queue (deque).\n\nWrite a program that processes a list of deque operations. Operation 1 followed by an order number inserts it at the front, operation 2 followed by an order number inserts it at the rear, operation 3 deletes the order at the front, and operation 4 deletes the order at the rear. Report every deletion, and print the contents of the deque at the end.",
        "sampleIn": "4\n1 7\n2 8\n3\n2 9",
        "sampleOut": "Deleted: 7\nDeque: 8 9",
        "hidden": [
          {
            "input": "4\n1 7\n2 8\n3\n2 9\n",
            "expected": "Deleted: 7\nDeque: 8 9"
          },
          {
            "input": "3\n2 15\n4\n3\n",
            "expected": "Deleted: 15\nDeque is empty\nDeque: Empty"
          },
          {
            "input": "5\n1 10\n2 20\n1 5\n3\n4\n",
            "expected": "Deleted: 5\nDeleted: 20\nDeque: 10"
          },
          {
            "input": "2\n3\n4\n",
            "expected": "Deque is empty\nDeque is empty\nDeque: Empty"
          },
          {
            "input": "6\n2 1\n2 2\n2 3\n3\n3\n3\n",
            "expected": "Deleted: 1\nDeleted: 2\nDeleted: 3\nDeque: Empty"
          },
          {
            "input": "7\n1 1\n1 2\n1 3\n4\n4\n4\n4\n",
            "expected": "Deleted: 1\nDeleted: 2\nDeleted: 3\nDeque is empty\nDeque: Empty"
          }
        ],
        "sol": "#include <stdio.h>\nint main() {\n    int m;\n    int d[255];\n    int front = 100, rear = 100;\n    scanf(\"%d\", &m);\n    for (int i = 0; i < m; i++) {\n        int t;\n        scanf(\"%d\", &t);\n        if (t == 1) {\n            int x;\n            scanf(\"%d\", &x);\n            front--;\n            d[front] = x;\n        } else if (t == 2) {\n            int x;\n            scanf(\"%d\", &x);\n            d[rear] = x;\n            rear++;\n        } else if (t == 3) {\n            if (front == rear) {\n                printf(\"Deque is empty\\n\");\n            } else {\n                printf(\"Deleted: %d\\n\", d[front]);\n                front++;\n            }\n        } else if (t == 4) {\n            if (front == rear) {\n                printf(\"Deque is empty\\n\");\n            } else {\n                rear--;\n                printf(\"Deleted: %d\\n\", d[rear]);\n            }\n        }\n    }\n    if (front == rear) {\n        printf(\"Deque: Empty\\n\");\n    } else {\n        printf(\"Deque:\");\n        for (int i = front; i < rear; i++) {\n            printf(\" %d\", d[i]);\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}",
        "samples": [
          {
            "input": "4\n1 7\n2 8\n3\n2 9",
            "expected": "Deleted: 7\nDeque: 8 9"
          },
          {
            "input": "3\n2 15\n4\n3",
            "expected": "Deleted: 15\nDeque is empty\nDeque: Empty"
          }
        ],
        "hidden_cases": [
          {
            "input": "5\n1 10\n2 20\n1 5\n3\n4\n",
            "expected": "Deleted: 5\nDeleted: 20\nDeque: 10"
          },
          {
            "input": "2\n3\n4\n",
            "expected": "Deque is empty\nDeque is empty\nDeque: Empty"
          },
          {
            "input": "6\n2 1\n2 2\n2 3\n3\n3\n3\n",
            "expected": "Deleted: 1\nDeleted: 2\nDeleted: 3\nDeque: Empty"
          },
          {
            "input": "7\n1 1\n1 2\n1 3\n4\n4\n4\n4\n",
            "expected": "Deleted: 1\nDeleted: 2\nDeleted: 3\nDeque is empty\nDeque: Empty"
          }
        ],
        "inFmt": "The first line contains an integer m representing the number of operations.\n\nEach of the next m lines consists of either two space-separated integers \"1 x\" or \"2 x\", representing an insertion of the order number x at the front or at the rear, or a single integer \"3\" or \"4\", representing a deletion from the front or from the rear.",
        "outFmt": "For every deletion, print \"Deleted: \" followed by the removed order number, or \"Deque is empty\" if there is no order to delete.\n\nThe last line prints \"Deque: \" followed by the order numbers from front to rear separated by spaces, or \"Deque: Empty\" if the deque has no orders.",
        "cons": "1 ≤ m ≤ 50\n1 ≤ x ≤ 1000"
      }
    ]
  },
  "u3": {
    "name": "Unit 3: Trees, BST, AVL & Heaps",
    "mcq": [
      {
        "id": "u3_m1",
        "q": "Which of the following traversals visits the root node first?",
        "o": [
          "Preorder",
          "Inorder",
          "Postorder",
          "Reverse inorder"
        ],
        "a": 0
      },
      {
        "id": "u3_m2",
        "q": "If height is counted in edges, what is the height of a tree that contains only the root node?",
        "o": [
          "1",
          "2",
          "-1",
          "0"
        ],
        "a": 3
      },
      {
        "id": "u3_m3",
        "q": "What is a node that has no children called in a tree?",
        "o": [
          "Leaf node",
          "Root node",
          "Parent node",
          "Sibling node"
        ],
        "a": 0
      },
      {
        "id": "u3_m4",
        "q": "In which order are the nodes visited in an inorder traversal?",
        "o": [
          "Root, Left, Right",
          "Left, Root, Right",
          "Left, Right, Root",
          "Right, Root, Left"
        ],
        "a": 1
      },
      {
        "id": "u3_m5",
        "q": "A tree with n nodes has how many edges?",
        "o": [
          "n",
          "n + 1",
          "n - 1",
          "n / 2"
        ],
        "a": 2
      },
      {
        "id": "u3_m6",
        "q": "Which traversal of an expression tree gives the postfix form of the expression?",
        "o": [
          "Postorder",
          "Preorder",
          "Inorder",
          "Level order"
        ],
        "a": 0
      },
      {
        "id": "u3_m7",
        "q": "If the root is at level 0, what is the maximum number of nodes at level i of a binary tree?",
        "o": [
          "2i",
          "2^i",
          "i^2",
          "2^(i+1)"
        ],
        "a": 1
      },
      {
        "id": "u3_m8",
        "q": "Which property holds for every node in a binary search tree?",
        "o": [
          "All keys in the left subtree are greater than the node's key",
          "Keys in both subtrees are equal to the node's key",
          "Both subtrees have the same number of nodes",
          "Keys in the left subtree are smaller and keys in the right subtree are larger"
        ],
        "a": 3
      },
      {
        "id": "u3_m9",
        "q": "What do the leaf nodes of an expression tree contain?",
        "o": [
          "Operators",
          "Parentheses",
          "Operands",
          "Function names"
        ],
        "a": 2
      },
      {
        "id": "u3_m10",
        "q": "What is the maximum number of children a node can have in a binary tree?",
        "o": [
          "1",
          "3",
          "4",
          "2"
        ],
        "a": 3
      },
      {
        "id": "u3_m11",
        "q": "Where is the smallest element located in a binary search tree?",
        "o": [
          "The root node",
          "The rightmost node",
          "The leftmost node",
          "The last inserted node"
        ],
        "a": 2
      },
      {
        "id": "u3_m12",
        "q": "Which rotation fixes the Left-Left imbalance case in an AVL tree?",
        "o": [
          "Single right rotation",
          "Single left rotation",
          "Left-right double rotation",
          "Right-left double rotation"
        ],
        "a": 0
      },
      {
        "id": "u3_m13",
        "q": "In the array representation of a binary heap with the root at index 0, what is the index of the left child of the node at index i?",
        "o": [
          "i / 2",
          "2 * i",
          "2 * i + 2",
          "2 * i + 1"
        ],
        "a": 3
      },
      {
        "id": "u3_m14",
        "q": "Which element is removed first from a priority queue?",
        "o": [
          "The element inserted first",
          "The element inserted last",
          "The element with the highest priority",
          "The element in the middle"
        ],
        "a": 2
      },
      {
        "id": "u3_m15",
        "q": "Which balance factor values are allowed for every node in an AVL tree?",
        "o": [
          "0 and 1 only",
          "-1, 0 or 1",
          "-2 to 2",
          "Any positive integer"
        ],
        "a": 1
      },
      {
        "id": "u3_m16",
        "q": "What is the output of the following C code?",
        "code": "#include <stdio.h>\nstruct Node {\n    int data;\n    struct Node *left, *right;\n};\nvoid preorder(struct Node *p) {\n    if (p == NULL)\n        return;\n    printf(\"%d \", p->data);\n    preorder(p->left);\n    preorder(p->right);\n}\nint main() {\n    struct Node n4 = {4, NULL, NULL};\n    struct Node n5 = {5, NULL, NULL};\n    struct Node n3 = {3, NULL, NULL};\n    struct Node n2 = {2, &n4, &n5};\n    struct Node n1 = {1, &n2, &n3};\n    preorder(&n1);\n    return 0;\n}",
        "o": [
          "4 2 5 1 3",
          "1 2 4 5 3",
          "4 5 2 3 1",
          "1 2 3 4 5"
        ],
        "a": 1
      },
      {
        "id": "u3_m17",
        "q": "What is the output of the following C code?",
        "code": "#include <stdio.h>\nstruct Node {\n    int data;\n    struct Node *left, *right;\n};\nint main() {\n    struct Node e = {40, NULL, NULL};\n    struct Node d = {20, NULL, NULL};\n    struct Node c = {70, NULL, NULL};\n    struct Node b = {30, &d, &e};\n    struct Node a = {50, &b, &c};\n    struct Node *p = &a;\n    while (p->left != NULL)\n        p = p->left;\n    printf(\"%d\", p->data);\n    return 0;\n}",
        "o": [
          "50",
          "30",
          "70",
          "20"
        ],
        "a": 3
      },
      {
        "id": "u3_m18",
        "q": "What is the output of the following C code?",
        "code": "#include <stdio.h>\nstruct Node {\n    int data;\n    struct Node *left, *right;\n};\nint height(struct Node *n) {\n    if (n == NULL)\n        return 0;\n    int l = height(n->left);\n    int r = height(n->right);\n    return 1 + (l > r ? l : r);\n}\nint main() {\n    struct Node n10 = {10, NULL, NULL};\n    struct Node n20 = {20, &n10, NULL};\n    struct Node n30 = {30, &n20, NULL};\n    int bf = height(n30.left) - height(n30.right);\n    printf(\"%d %d\", height(&n30), bf);\n    return 0;\n}",
        "o": [
          "2 3",
          "3 2",
          "3 1",
          "2 2"
        ],
        "a": 1
      },
      {
        "id": "u3_m19",
        "q": "What is the output of the following C code for the expression tree of (3 + 4) * 2?",
        "code": "#include <stdio.h>\nstruct Node {\n    char ch;\n    struct Node *left, *right;\n};\nvoid postorder(struct Node *p) {\n    if (p == NULL)\n        return;\n    postorder(p->left);\n    postorder(p->right);\n    printf(\"%c\", p->ch);\n}\nint main() {\n    struct Node three = {'3', NULL, NULL};\n    struct Node four = {'4', NULL, NULL};\n    struct Node two = {'2', NULL, NULL};\n    struct Node plus = {'+', &three, &four};\n    struct Node mul = {'*', &plus, &two};\n    postorder(&mul);\n    return 0;\n}",
        "o": [
          "34+2*",
          "*+342",
          "3+4*2",
          "342+*"
        ],
        "a": 0
      },
      {
        "id": "u3_m20",
        "q": "What is the output of the following C code, which inserts 5 into a min-heap stored in an array?",
        "code": "#include <stdio.h>\nint main() {\n    int h[10] = {10, 20, 30, 40, 50};\n    int n = 5, i = n, t;\n    h[n] = 5;\n    n++;\n    while (i > 0 && h[(i - 1) / 2] > h[i]) {\n        t = h[i];\n        h[i] = h[(i - 1) / 2];\n        h[(i - 1) / 2] = t;\n        i = (i - 1) / 2;\n    }\n    for (i = 0; i < n; i++)\n        printf(\"%d \", h[i]);\n    return 0;\n}",
        "o": [
          "5 10 20 30 40 50",
          "10 20 30 40 50 5",
          "5 20 10 40 50 30",
          "5 20 30 40 50 10"
        ],
        "a": 2
      }
    ],
    "debug": [
      {
        "id": "u3_d1",
        "title": "Q1. Find Minimum in a Binary Search Tree",
        "ps": "Suresh keeps the book IDs of a library in a binary search tree, where smaller IDs go to the left subtree and larger or equal IDs go to the right subtree. To open the catalogue from the oldest ID, he needs the smallest ID in the tree, which is found by moving to the left child again and again until there is no left child.\n\nThe function findMin() in the editable area is meant to return the smallest ID, but the code contains errors. Debug the code so that the program prints the expected output.\n\nNote: The helper code uses the malloc() function to create the nodes of the tree.",
        "inFmt": "The first line of input consists of an integer n representing the number of book IDs.\n\nThe second line of input consists of n space-separated integers representing the book IDs in the order they are inserted.",
        "outFmt": "The first line of output prints \"Minimum: \" followed by an integer representing the smallest book ID in the tree.",
        "cons": "1 ≤ n ≤ 100\n1 ≤ book IDs[i] ≤ 1000",
        "sampleIn": "5\n30 20 40 10 25",
        "sampleOut": "Minimum: 10",
        "header": "#include <stdio.h>\n#include <stdlib.h>\nstruct Node {\n  int data;\n  struct Node *left;\n  struct Node *right;\n};\nstruct Node *insert(struct Node *root, int x) {\n  if (root == NULL) {\n    struct Node *node =\n        (struct Node *)malloc(sizeof(struct Node));\n    node->data = x;\n    node->left = NULL;\n    node->right = NULL;\n    return node;\n  }\n  if (x < root->data)\n    root->left = insert(root->left, x);\n  else\n    root->right = insert(root->right, x);\n  return root;\n}",
        "buggy": "int findMin(struct Node *root) {\n  struct Node *curr = root;\n  while (curr->right != NULL)\n    curr = curr->right;\n  return curr->data;\n}",
        "footer": "int main() {\n  int n;\n  struct Node *root = NULL;\n  scanf(\"%d\", &n);\n  for (int i = 0; i < n; i++) {\n    int x;\n    scanf(\"%d\", &x);\n    root = insert(root, x);\n  }\n  printf(\"Minimum: %d\\n\", findMin(root));\n  return 0;\n}",
        "samples": [
          {
            "input": "5\n30 20 40 10 25",
            "expected": "Minimum: 10"
          },
          {
            "input": "4\n15 18 12 9",
            "expected": "Minimum: 9"
          }
        ],
        "hidden_cases": [
        {
          "input": "2\n13 89",
          "expected": "Minimum: 13"
        },
        {
          "input": "5\n60 50 78 69 9",
          "expected": "Minimum: 9"
        },
        {
          "input": "7\n98 85 59 51 1 94 56",
          "expected": "Minimum: 1"
        },
        {
          "input": "2\n42 16",
          "expected": "Minimum: 16"
        },
        {
          "input": "7\n63 49 78 94 82 31 98",
          "expected": "Minimum: 31"
        },
        {
          "input": "4\n56 32 92 48",
          "expected": "Minimum: 32"
        }
      ],
        "sol": "int findMin(struct Node *root) {\n  struct Node *curr = root;\n  while (curr->left != NULL)\n    curr = curr->left;\n  return curr->data;\n}"
      },
      {
        "id": "u3_d2",
        "title": "Q2. Count Leaf Nodes in a Binary Search Tree",
        "ps": "Hema is studying the structure of an employee hierarchy stored in a binary search tree. A leaf node is a node that has neither a left child nor a right child. She wants a program that counts all the leaf nodes of the tree using recursion: an empty tree has 0 leaves, a node without children counts as 1 leaf, and for every other node the leaves of its left and right subtrees are added.\n\nThe function countLeaves() in the editable area is meant to do this, but the code contains errors. Debug the code so that the program prints the expected output.\n\nNote: The helper code uses the malloc() function to create the nodes of the tree.",
        "inFmt": "The first line of input consists of an integer n representing the number of employee IDs.\n\nThe second line of input consists of n space-separated integers representing the employee IDs in the order they are inserted.",
        "outFmt": "The first line of output prints \"Leaf Nodes: \" followed by an integer representing the number of leaf nodes in the tree.",
        "cons": "1 ≤ n ≤ 100\n1 ≤ employee IDs[i] ≤ 1000",
        "sampleIn": "3\n20 10 30",
        "sampleOut": "Leaf Nodes: 2",
        "header": "#include <stdio.h>\n#include <stdlib.h>\nstruct Node {\n  int data;\n  struct Node *left;\n  struct Node *right;\n};\nstruct Node *insert(struct Node *root, int x) {\n  if (root == NULL) {\n    struct Node *node =\n        (struct Node *)malloc(sizeof(struct Node));\n    node->data = x;\n    node->left = NULL;\n    node->right = NULL;\n    return node;\n  }\n  if (x < root->data)\n    root->left = insert(root->left, x);\n  else\n    root->right = insert(root->right, x);\n  return root;\n}",
        "buggy": "int countLeaves(struct Node *root) {\n  if (root == NULL) return 1;\n  return countLeaves(root->left) + countLeaves(root->right);\n}",
        "footer": "int main() {\n  int n;\n  struct Node *root = NULL;\n  scanf(\"%d\", &n);\n  for (int i = 0; i < n; i++) {\n    int x;\n    scanf(\"%d\", &x);\n    root = insert(root, x);\n  }\n  printf(\"Leaf Nodes: %d\\n\", countLeaves(root));\n  return 0;\n}",
        "samples": [
          {
            "input": "3\n20 10 30",
            "expected": "Leaf Nodes: 2"
          },
          {
            "input": "4\n20 40 30 50",
            "expected": "Leaf Nodes: 2"
          }
        ],
        "hidden_cases": [
          {
            "input": "3\n20 10 30",
            "expected": "Leaf Nodes: 2"
          },
          {
            "input": "4\n20 40 30 50",
            "expected": "Leaf Nodes: 2"
          },
          {
            "input": "1\n10",
            "expected": "Leaf Nodes: 1"
          },
          {
            "input": "4\n10 20 30 40",
            "expected": "Leaf Nodes: 1"
          },
          {
            "input": "7\n10 40 20 60 30 50 70",
            "expected": "Leaf Nodes: 3"
          },
          {
            "input": "8\n30 60 40 50 45 55 70 80",
            "expected": "Leaf Nodes: 3"
          }
        ],
        "sol": "int countLeaves(struct Node *root) {\n  if (root == NULL) return 0;\n  if (root->left == NULL && root->right == NULL)\n    return 1;\n  return countLeaves(root->left) + countLeaves(root->right);\n}"
      },
      {
        "id": "u3_d3",
        "title": "Q3. Extract Minimum from a Min-heap",
        "ps": "Tarun runs a help desk where every ticket has a priority number and a smaller number means a more urgent ticket. The tickets are stored in a binary min-heap kept in an array. To serve a ticket, the root (the smallest value) is removed, the last element of the heap is moved to the root, and it is pushed down by swapping it with its smaller child until the heap property is restored.\n\nThe function extractMin() in the editable area is meant to remove and return the smallest priority, but the code contains errors. Debug the code so that the program prints the first k tickets served.",
        "inFmt": "The first line of input consists of an integer n representing the number of tickets.\n\nThe second line of input consists of n space-separated integers representing the priorities in the order they arrive.\n\nThe third line of input consists of an integer k representing the number of tickets to be served.",
        "outFmt": "The first line of output prints \"Extracted: \" followed by the k priorities removed from the heap, in the order they are removed, separated by spaces.",
        "cons": "1 ≤ n ≤ 100\n1≤k≤n\n1 ≤ priorities[i] ≤ 1000",
        "sampleIn": "4\n12 7 3 9\n2",
        "sampleOut": "Extracted: 3 7",
        "header": "#include <stdio.h>\nint heap[105];\nint size = 0;\nvoid insert(int x) {\n  heap[size] = x;\n  int i = size;\n  size++;\n  while (i > 0 && heap[(i - 1) / 2] > heap[i]) {\n    int parent = (i - 1) / 2;\n    int temp = heap[parent];\n    heap[parent] = heap[i];\n    heap[i] = temp;\n    i = parent;\n  }\n}",
        "buggy": "int extractMin() {\n  int minValue = heap[0];\n  size--;\n  heap[0] = heap[size];\n  return minValue;\n}",
        "footer": "int main() {\n  int n, k;\n  scanf(\"%d\", &n);\n  for (int i = 0; i < n; i++) {\n    int x;\n    scanf(\"%d\", &x);\n    insert(x);\n  }\n  scanf(\"%d\", &k);\n  printf(\"Extracted:\");\n  for (int i = 0; i < k; i++) printf(\" %d\", extractMin());\n  printf(\"\\n\");\n  return 0;\n}",
        "samples": [
          {
            "input": "4\n12 7 3 9\n2",
            "expected": "Extracted: 3 7"
          },
          {
            "input": "5\n20 15 10 5 1\n3",
            "expected": "Extracted: 1 5 10"
          }
        ],
        "hidden_cases": [
        {
          "input": "7\n87 20 47 45 16 75 98\n3",
          "expected": "Extracted: 16 20 45"
        },
        {
          "input": "8\n25 61 96 61 39 27 69 71\n3",
          "expected": "Extracted: 25 27 39"
        },
        {
          "input": "4\n98 20 14 72\n2",
          "expected": "Extracted: 14 20"
        },
        {
          "input": "8\n75 90 60 93 56 60 26 86\n3",
          "expected": "Extracted: 26 56 60"
        },
        {
          "input": "3\n40 22 77\n3",
          "expected": "Extracted: 22 40 77"
        },
        {
          "input": "4\n38 76 3 30\n3",
          "expected": "Extracted: 3 30 38"
        }
      ],
        "sol": "int extractMin() {\n  int minValue = heap[0];\n  size--;\n  heap[0] = heap[size];\n  int i = 0;\n  while (2 * i + 1 < size) {\n    int child = 2 * i + 1;\n    if (child + 1 < size &&\n        heap[child + 1] < heap[child])\n      child++;\n    if (heap[i] <= heap[child])\n      break;\n    int temp = heap[i];\n    heap[i] = heap[child];\n    heap[child] = temp;\n    i = child;\n  }\n  return minValue;\n}"
      },
      {
        "id": "u3_d4",
        "title": "Q4. Check Whether a Binary Search Tree is Balanced",
        "ps": "Vimal is learning AVL trees and wants a program that tells him whether a given binary search tree already satisfies the AVL property. A tree is balanced when, for every node, the heights of its left and right subtrees differ by at most 1. Here the height of an empty tree is 0 and the height of a node is 1 plus the larger height of its two subtrees.\n\nThe functions height() and isBalanced() in the editable area are meant to check this property at every node, but the code contains errors. Debug the code so that the program prints the expected output.\n\nNote: The helper code uses the malloc() function to create the nodes of the tree.",
        "inFmt": "The first line of input consists of an integer n representing the number of keys. The second line of input consists of n space-separated integers representing the keys in the order they are inserted into the binary search tree.",
        "outFmt": "The first line of output prints \"Balanced\" if the tree satisfies the AVL property at every node, or \"Not Balanced\" otherwise.",
        "cons": "1 ≤ n ≤ 100\n1 ≤ keys[i] ≤ 1000\nAll keys are distinct.",
        "sampleIn": "4\n20 10 30 25",
        "sampleOut": "Balanced",
        "header": "#include <stdio.h>\n#include <stdlib.h>\nstruct Node {\n  int data;\n  struct Node *left;\n  struct Node *right;\n};\nstruct Node *insert(struct Node *root, int x) {\n  if (root == NULL) {\n    struct Node *node =\n        (struct Node *)malloc(sizeof(struct Node));\n    node->data = x;\n    node->left = NULL;\n    node->right = NULL;\n    return node;\n  }\n  if (x < root->data)\n    root->left = insert(root->left, x);\n  else\n    root->right = insert(root->right, x);\n  return root;\n}\nint max(int a, int b) { return (a > b) ? a : b; }",
        "buggy": "int height(struct Node *root) {\n  if (root == NULL) return 0;\n  return max(height(root->left),\n             height(root->right));\n}\nint isBalanced(struct Node *root) {\n  if (root == NULL) return 1;\n  int leftHeight = height(root->left);\n  int rightHeight = height(root->right);\n  int diff = leftHeight - rightHeight;\n  return diff <= 1 && diff >= -1;\n}",
        "footer": "int main() {\n  int n;\n  struct Node *root = NULL;\n  scanf(\"%d\", &n);\n  for (int i = 0; i < n; i++) {\n    int x;\n    scanf(\"%d\", &x);\n    root = insert(root, x);\n  }\n  if (isBalanced(root))\n    printf(\"Balanced\\n\");\n  else\n    printf(\"Not Balanced\\n\");\n  return 0;\n}",
        "samples": [
          {
            "input": "4\n20 10 30 25",
            "expected": "Balanced"
          },
          {
            "input": "4\n1 2 3 4",
            "expected": "Not Balanced"
          }
        ],
        "hidden_cases": [
        {
          "input": "5\n36 35 34 33 32",
          "expected": "Not Balanced"
        },
        {
          "input": "3\n17 16 15",
          "expected": "Not Balanced"
        },
        {
          "input": "5\n29 28 27 26 25",
          "expected": "Not Balanced"
        },
        {
          "input": "6\n40 41 42 43 44 45",
          "expected": "Not Balanced"
        },
        {
          "input": "3\n34 33 32",
          "expected": "Not Balanced"
        },
        {
          "input": "4\n28 29 30 31",
          "expected": "Not Balanced"
        }
      ],
        "sol": "int height(struct Node *root) {\n  if (root == NULL) return 0;\n  return 1 + max(height(root->left),\n                 height(root->right));\n}\nint isBalanced(struct Node *root) {\n  if (root == NULL) return 1;\n  int leftHeight = height(root->left);\n  int rightHeight = height(root->right);\n  int diff = leftHeight - rightHeight;\n  if (diff > 1 || diff < -1)\n    return 0;\n  return isBalanced(root->left) &&\n         isBalanced(root->right);\n}"
      },
      {
        "id": "u3_d5",
        "title": "Q5. Find the Height of a Binary Search Tree",
        "ps": "Ganesh maintains a binary search tree of product codes and wants to know how deep the tree has grown, because a very deep tree makes searching slow. The height of a tree is the number of edges on the longest path from the root down to a leaf, so a tree with only a root has height 0 and an empty tree has height -1. The height of a node is one more than the larger of the heights of its two subtrees.\n\nThe function height() in the editable area is meant to return the height of the tree, but the code contains errors. Debug the code so that the program prints the expected output.\n\nNote: The helper code uses the malloc() function to create the nodes of the tree.",
        "inFmt": "The first line of input consists of an integer n representing the number of product codes.\n\nThe second line of input consists of n space-separated integers representing the product codes in the order they are inserted.",
        "outFmt": "The first line of output prints \"Height: \" followed by an integer representing the height of the tree.",
        "cons": "1 ≤ n ≤ 100\n1 ≤ product codes[i] ≤ 1000",
        "sampleIn": "5\n30 20 40 10 25",
        "sampleOut": "Height: 2",
        "header": "#include <stdio.h>\n#include <stdlib.h>\nstruct Node {\n  int data;\n  struct Node *left;\n  struct Node *right;\n};\nstruct Node *insert(struct Node *root, int x) {\n  if (root == NULL) {\n    struct Node *node =\n        (struct Node *)malloc(sizeof(struct Node));\n    node->data = x;\n    node->left = NULL;\n    node->right = NULL;\n    return node;\n  }\n  if (x < root->data)\n    root->left = insert(root->left, x);\n  else\n    root->right = insert(root->right, x);\n  return root;\n}",
        "buggy": "int height(struct Node *root) {\n  if (root == NULL) return 0;\n  int leftHeight = height(root->left);\n  int rightHeight = height(root->right);\n  return 1 + ((leftHeight < rightHeight)\n                  ? leftHeight\n                  : rightHeight);\n}",
        "footer": "int main() {\n  int n;\n  struct Node *root = NULL;\n  scanf(\"%d\", &n);\n  for (int i = 0; i < n; i++) {\n    int x;\n    scanf(\"%d\", &x);\n    root = insert(root, x);\n  }\n  printf(\"Height: %d\\n\", height(root));\n  return 0;\n}",
        "samples": [
          {
            "input": "5\n30 20 40 10 25",
            "expected": "Height: 2"
          },
          {
            "input": "4\n5 4 3 2",
            "expected": "Height: 3"
          }
        ],
        "hidden_cases": [
        {
          "input": "5\n2 3 4 5 6",
          "expected": "Height: 4"
        },
        {
          "input": "8\n10 11 12 13 14 15 16 17",
          "expected": "Height: 7"
        },
        {
          "input": "3\n22 21 20",
          "expected": "Height: 2"
        },
        {
          "input": "1\n31",
          "expected": "Height: 0"
        },
        {
          "input": "6\n33 34 35 36 37 38",
          "expected": "Height: 5"
        },
        {
          "input": "7\n32 31 30 29 28 27 26",
          "expected": "Height: 6"
        }
      ],
        "sol": "int height(struct Node *root) {\n  if (root == NULL) return -1;\n  int leftHeight = height(root->left);\n  int rightHeight = height(root->right);\n  return 1 + ((leftHeight > rightHeight)\n                  ? leftHeight\n                  : rightHeight);\n}"
      }],
    "cod": [
      {
        "id": "u3_c1",
        "title": "Q1. TREE TRAVERSALS USING ARRAY REPRESENTATION",
        "ps": "Dr. Anita maintains the reporting hierarchy of a college department as a complete binary tree. The employee IDs are stored level by level in an array, so the node at index i has its left child at index 2i + 1 and its right child at index 2i + 2, provided those indices are less than the number of nodes.\n\nWrite a program that reads the array and prints the preorder (root, left, right), inorder (left, root, right), and postorder (left, right, root) traversals of the tree, using recursion on the array indices.",
        "sampleIn": "4\n15 10 20 5",
        "sampleOut": "Preorder: 15 10 5 20\nInorder: 5 10 15 20\nPostorder: 5 10 20 15",
        "hidden": [
          {
            "input": "4\n15 10 20 5\n",
            "expected": "Preorder: 15 10 5 20\nInorder: 5 10 15 20\nPostorder: 5 10 20 15"
          },
          {
            "input": "6\n2 4 6 8 10 12\n",
            "expected": "Preorder: 2 4 8 10 6 12\nInorder: 8 4 10 2 12 6\nPostorder: 8 10 4 12 6 2"
          },
          {
            "input": "7\n1 2 3 4 5 6 7\n",
            "expected": "Preorder: 1 2 4 5 3 6 7\nInorder: 4 2 5 1 6 3 7\nPostorder: 4 5 2 6 7 3 1"
          },
          {
            "input": "1\n10\n",
            "expected": "Preorder: 10\nInorder: 10\nPostorder: 10"
          },
          {
            "input": "3\n5 3 8\n",
            "expected": "Preorder: 5 3 8\nInorder: 3 5 8\nPostorder: 3 8 5"
          },
          {
            "input": "5\n1 2 3 4 5\n",
            "expected": "Preorder: 1 2 4 5 3\nInorder: 4 2 5 1 3\nPostorder: 4 5 2 3 1"
          }
        ],
        "sol": "#include <stdio.h>\nint n;\nint a[105];\nint res[105];\nint cnt;\nvoid preorder(int i) {\n    if (i >= n) return;\n    res[cnt++] = a[i];\n    preorder(2 * i + 1);\n    preorder(2 * i + 2);\n}\nvoid inorder(int i) {\n    if (i >= n) return;\n    inorder(2 * i + 1);\n    res[cnt++] = a[i];\n    inorder(2 * i + 2);\n}\nvoid postorder(int i) {\n    if (i >= n) return;\n    postorder(2 * i + 1);\n    postorder(2 * i + 2);\n    res[cnt++] = a[i];\n}\nvoid show(char *label) {\n    printf(\"%s:\", label);\n    for (int i = 0; i < cnt; i++)\n        printf(\" %d\", res[i]);\n    printf(\"\\n\");\n}\nint main() {\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++)\n        scanf(\"%d\", &a[i]);\n    cnt = 0; preorder(0); show(\"Preorder\");\n    cnt = 0; inorder(0); show(\"Inorder\");\n    cnt = 0; postorder(0); show(\"Postorder\");\n    return 0;\n}",
        "samples": [
          {
            "input": "4\n15 10 20 5",
            "expected": "Preorder: 15 10 5 20\nInorder: 5 10 15 20\nPostorder: 5 10 20 15"
          },
          {
            "input": "6\n2 4 6 8 10 12",
            "expected": "Preorder: 2 4 8 10 6 12\nInorder: 8 4 10 2 12 6\nPostorder: 8 10 4 12 6 2"
          }
        ],
        "hidden_cases": [
          {
            "input": "7\n1 2 3 4 5 6 7\n",
            "expected": "Preorder: 1 2 4 5 3 6 7\nInorder: 4 2 5 1 6 3 7\nPostorder: 4 5 2 6 7 3 1"
          },
          {
            "input": "1\n10\n",
            "expected": "Preorder: 10\nInorder: 10\nPostorder: 10"
          },
          {
            "input": "3\n5 3 8\n",
            "expected": "Preorder: 5 3 8\nInorder: 3 5 8\nPostorder: 3 8 5"
          },
          {
            "input": "5\n1 2 3 4 5\n",
            "expected": "Preorder: 1 2 4 5 3\nInorder: 4 2 5 1 3\nPostorder: 4 5 2 3 1"
          }
        ],
        "inFmt": "The first line of input consists of an integer n representing the number of nodes in the tree.\n\nThe second line of input consists of n space-separated integers representing the node values stored level by level, starting with the root at index 0.",
        "outFmt": "The first line of output prints \"Preorder: \" followed by the preorder traversal of the tree separated by spaces.\n\nThe second line of output prints \"Inorder: \" followed by the inorder traversal of the tree separated by spaces.\n\nThe third line of output prints \"Postorder: \" followed by the postorder traversal of the tree separated by spaces.",
        "cons": "1 ≤ n ≤ 100\n1 ≤ node values[i] ≤ 1000"
      },
      {
        "id": "u3_c2",
        "title": "Q2. INSERT ELEMENTS INTO A MIN-HEAP",
        "ps": "Tarun is designing a help desk where every support ticket carries a priority number, and a smaller number means a more urgent ticket. The tickets are kept in a binary min-heap stored in an array, so that the most urgent ticket is always at index 0.\n\nWrite a program that inserts the given priorities into an initially empty min-heap one by one. Each new value is placed at the end of the array and then moved up: while its parent is larger, swap it with the parent. The parent of the element at index i is at index (i - 1) / 2 using integer division. Print the array after all insertions.",
        "sampleIn": "4\n12 7 3 9",
        "sampleOut": "Min-Heap: 3 9 7 12",
        "hidden": [
          {
            "input": "4\n12 7 3 9\n",
            "expected": "Min-Heap: 3 9 7 12"
          },
          {
            "input": "5\n20 15 10 5 1\n",
            "expected": "Min-Heap: 1 5 15 20 10"
          },
          {
            "input": "5\n5 3 8 1 2\n",
            "expected": "Min-Heap: 1 2 8 5 3"
          },
          {
            "input": "1\n7\n",
            "expected": "Min-Heap: 7"
          },
          {
            "input": "4\n4 3 2 1\n",
            "expected": "Min-Heap: 1 2 3 4"
          },
          {
            "input": "6\n10 20 30 40 50 60\n",
            "expected": "Min-Heap: 10 20 30 40 50 60"
          }
        ],
        "sol": "#include <stdio.h>\nint main() {\n    int n;\n    int h[105];\n    int size = 0;\n    scanf(\"%d\", &n);\n    for (int k = 0; k < n; k++) {\n        int x;\n        scanf(\"%d\", &x);\n        h[size] = x;\n        int i = size;\n        size++;\n        while (i > 0 && h[(i - 1) / 2] > h[i]) {\n            int parent = (i - 1) / 2;\n            int temp = h[parent];\n            h[parent] = h[i];\n            h[i] = temp;\n            i = parent;\n        }\n    }\n    printf(\"Min-Heap:\");\n    for (int i = 0; i < size; i++)\n        printf(\" %d\", h[i]);\n    printf(\"\\n\");\n    return 0;\n}",
        "samples": [
          {
            "input": "4\n12 7 3 9",
            "expected": "Min-Heap: 3 9 7 12"
          },
          {
            "input": "5\n20 15 10 5 1",
            "expected": "Min-Heap: 1 5 15 20 10"
          }
        ],
        "hidden_cases": [
          {
            "input": "5\n5 3 8 1 2\n",
            "expected": "Min-Heap: 1 2 8 5 3"
          },
          {
            "input": "1\n7\n",
            "expected": "Min-Heap: 7"
          },
          {
            "input": "4\n4 3 2 1\n",
            "expected": "Min-Heap: 1 2 3 4"
          },
          {
            "input": "6\n10 20 30 40 50 60\n",
            "expected": "Min-Heap: 10 20 30 40 50 60"
          }
        ],
        "inFmt": "The first line of input consists of an integer n representing the number of tickets.\n\nThe second line of input consists of n space-separated integers representing the priorities in the order they arrive.",
        "outFmt": "The first line of output prints \"Min-Heap: \" followed by the elements of the heap array from index 0 onwards separated by spaces.",
        "cons": "1 ≤ n ≤ 100\n1 ≤ priorities[i] ≤ 1000"
      },
      {
        "id": "u3_c3",
        "title": "Q3. CONSTRUCT AN EXPRESSION TREE FROM POSTFIX EXPRESSION",
        "ps": "Lavanya is teaching a compiler design lab and wants to show her students how a postfix expression turns into an expression tree. In an expression tree, every leaf holds an operand and every internal node holds an operator whose left and right children are its two operands.\n\nWrite a program that reads a postfix expression and builds its expression tree using a stack of tree nodes: push a new node for every operand, and for every operator create a node, make the top of the stack its right child, the next one its left child, and push it back. Finally, print the expression in infix form by an inorder traversal, wrapping every operator node and its two operands in a pair of parentheses. A single operand is printed without parentheses.\n\nNote: Use the malloc() function to allocate memory for the nodes of the tree.",
        "sampleIn": "xy-",
        "sampleOut": "Infix Expression: (x-y)",
        "hidden": [
          {
            "input": "xy-\n",
            "expected": "Infix Expression: (x-y)"
          },
          {
            "input": "pqr+-\n",
            "expected": "Infix Expression: (p-(q+r))"
          },
          {
            "input": "ab+\n",
            "expected": "Infix Expression: (a+b)"
          },
          {
            "input": "ab+c*\n",
            "expected": "Infix Expression: ((a+b)*c)"
          },
          {
            "input": "abc+*\n",
            "expected": "Infix Expression: (a*(b+c))"
          },
          {
            "input": "a\n",
            "expected": "Infix Expression: a"
          }
        ],
        "sol": "#include <stdio.h>\n#include <stdlib.h>\nstruct Node {\n    char data;\n    struct Node *left;\n    struct Node *right;\n};\nstruct Node *newNode(char c) {\n    struct Node *node = (struct Node *)malloc(sizeof(struct Node));\n    node->data = c;\n    node->left = NULL;\n    node->right = NULL;\n    return node;\n}\nvoid printInfix(struct Node *root) {\n    if (root == NULL) return;\n    if (root->left == NULL && root->right == NULL) {\n        printf(\"%c\", root->data);\n        return;\n    }\n    printf(\"(\");\n    printInfix(root->left);\n    printf(\"%c\", root->data);\n    printInfix(root->right);\n    printf(\")\");\n}\nint main() {\n    char s[55];\n    struct Node *stack[55];\n    int top = -1;\n    scanf(\"%s\", s);\n    for (int i = 0; s[i] != '\\0'; i++) {\n        char c = s[i];\n        struct Node *node = newNode(c);\n        if (c < 'a' || c > 'z') {\n            node->right = stack[top--];\n            node->left = stack[top--];\n        }\n        stack[++top] = node;\n    }\n    printf(\"Infix Expression: \");\n    printInfix(stack[top]);\n    printf(\"\\n\");\n    return 0;\n}",
        "samples": [
          {
            "input": "xy-",
            "expected": "Infix Expression: (x-y)"
          },
          {
            "input": "pqr+-",
            "expected": "Infix Expression: (p-(q+r))"
          }
        ],
        "hidden_cases": [
          {
            "input": "ab+\n",
            "expected": "Infix Expression: (a+b)"
          },
          {
            "input": "ab+c*\n",
            "expected": "Infix Expression: ((a+b)*c)"
          },
          {
            "input": "abc+*\n",
            "expected": "Infix Expression: (a*(b+c))"
          },
          {
            "input": "a\n",
            "expected": "Infix Expression: a"
          }
        ],
        "inFmt": "The first line of input consists of a string s representing the postfix expression with no spaces.",
        "outFmt": "The first line of output prints \"Infix Expression: \" followed by the fully parenthesized infix form of the expression.",
        "cons": "1 ≤ length of s ≤ 50\ns is a valid postfix expression containing lowercase letters as operands and the operators + - * /"
      },
      {
        "id": "u3_c4",
        "title": "Q4. SEARCH FOR A KEY IN A BINARY SEARCH TREE AND FIND ITS DEPTH",
        "ps": "Suresh organises the digital catalogue of a library in a binary search tree of book IDs. Each book ID is inserted in the order it was received: an ID smaller than the current node goes to the left subtree, and an ID larger than the current node goes to the right subtree. All book IDs in the catalogue are different.\n\nWrite a program that builds the binary search tree from the given IDs and then searches for a given key starting from the root. The depth of a node is the number of edges on the path from the root to that node, so the root has depth 0. If the key is in the tree, print its depth, otherwise report that it was not found.\n\nNote: Use the malloc() function to allocate memory for the nodes of the tree.",
        "sampleIn": "5\n30 20 40 10 25\n25",
        "sampleOut": "Found at depth 2",
        "hidden": [
          {
            "input": "5\n30 20 40 10 25\n25\n",
            "expected": "Found at depth 2"
          },
          {
            "input": "3\n5 2 8\n9\n",
            "expected": "Not Found"
          },
          {
            "input": "7\n50 30 70 20 40 60 80\n60\n",
            "expected": "Found at depth 2"
          },
          {
            "input": "1\n10\n10\n",
            "expected": "Found at depth 0"
          },
          {
            "input": "5\n40 20 60 10 30\n55\n",
            "expected": "Not Found"
          },
          {
            "input": "6\n10 20 30 40 50 60\n60\n",
            "expected": "Found at depth 5"
          }
        ],
        "sol": "#include <stdio.h>\n#include <stdlib.h>\nstruct Node {\n    int data;\n    struct Node *left;\n    struct Node *right;\n};\nstruct Node *insert(struct Node *root, int x) {\n    if (root == NULL) {\n        struct Node *node = (struct Node *)malloc(sizeof(struct Node));\n        node->data = x; node->left = NULL; node->right = NULL;\n        return node;\n    }\n    if (x < root->data) root->left = insert(root->left, x);\n    else root->right = insert(root->right, x);\n    return root;\n}\nint main() {\n    int n, key;\n    struct Node *root = NULL;\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) {\n        int x;\n        scanf(\"%d\", &x);\n        root = insert(root, x);\n    }\n    scanf(\"%d\", &key);\n    struct Node *curr = root;\n    int depth = 0;\n    while (curr != NULL && curr->data != key) {\n        if (key < curr->data) curr = curr->left;\n        else curr = curr->right;\n        depth++;\n    }\n    if (curr == NULL) printf(\"Not Found\\n\");\n    else printf(\"Found at depth %d\\n\", depth);\n    return 0;\n}",
        "samples": [
          {
            "input": "5\n30 20 40 10 25\n25",
            "expected": "Found at depth 2"
          },
          {
            "input": "3\n5 2 8\n9",
            "expected": "Not Found"
          }
        ],
        "hidden_cases": [
          {
            "input": "7\n50 30 70 20 40 60 80\n60\n",
            "expected": "Found at depth 2"
          },
          {
            "input": "1\n10\n10\n",
            "expected": "Found at depth 0"
          },
          {
            "input": "5\n40 20 60 10 30\n55\n",
            "expected": "Not Found"
          },
          {
            "input": "6\n10 20 30 40 50 60\n60\n",
            "expected": "Found at depth 5"
          }
        ],
        "inFmt": "The first line of input consists of an integer n representing the number of book IDs.\n\nThe second line of input consists of n space-separated integers representing the book IDs in the order they are inserted.\n\nThe third line of input consists of an integer key representing the book ID to search for.",
        "outFmt": "If the key is present, the first line of output prints \"Found at depth \" followed by an integer representing the depth of the node holding the key.\n\nIf the key is not present, the first line of output prints the string \"Not Found\".",
        "cons": "1 ≤ n ≤ 100\n1 ≤ book IDs[i], key ≤ 1000\nAll book IDs are distinct."
      }
    ]
  },
  "u4": {
    "name": "Unit 4: B-Trees & Graphs",
    "mcq": [
      {
        "id": "u4_m1",
        "q": "In a B-tree of order m, what is the maximum number of children a node can have?",
        "o": [
          "m - 1",
          "m",
          "m + 1",
          "2m"
        ],
        "a": 1
      },
      {
        "id": "u4_m2",
        "q": "How are the edges of a directed graph represented?",
        "o": [
          "As unordered pairs of vertices",
          "As ordered pairs of vertices, each with a direction",
          "As loops on every vertex only",
          "As vertices with no connections"
        ],
        "a": 1
      },
      {
        "id": "u4_m3",
        "q": "What is a B-tree?",
        "o": [
          "A self-balancing multiway search tree in which all leaves are at the same level",
          "A binary tree in which every node has exactly two children",
          "A graph with no cycles and no edges",
          "A heap-ordered tree used for priority queues"
        ],
        "a": 0
      },
      {
        "id": "u4_m4",
        "q": "Which statement is TRUE about a B+ tree?",
        "o": [
          "Data records are stored in internal nodes only",
          "Leaf nodes are not connected to each other",
          "All data records are stored in leaf nodes, which are linked together",
          "It is always a binary tree"
        ],
        "a": 2
      },
      {
        "id": "u4_m5",
        "q": "How is a graph G formally defined?",
        "o": [
          "A set of vertices only",
          "A set of edges only",
          "A list of nodes arranged in levels",
          "A set of vertices V and a set of edges E, written G = (V, E)"
        ],
        "a": 3
      },
      {
        "id": "u4_m6",
        "q": "Which data structure is used, explicitly or through recursion, in depth-first traversal?",
        "o": [
          "Stack",
          "Queue",
          "Heap",
          "Hash table"
        ],
        "a": 0
      },
      {
        "id": "u4_m7",
        "q": "A topological sort can be performed only on which kind of graph?",
        "o": [
          "Undirected graph with cycles",
          "Complete undirected graph",
          "Weighted undirected graph",
          "Directed acyclic graph (DAG)"
        ],
        "a": 3
      },
      {
        "id": "u4_m8",
        "q": "A connected undirected graph has an Euler circuit if and only if:",
        "o": [
          "It contains exactly two vertices of odd degree",
          "It has no cycles",
          "Every vertex has even degree",
          "Every vertex has degree one"
        ],
        "a": 2
      },
      {
        "id": "u4_m9",
        "q": "Which data structure is used to implement breadth-first traversal?",
        "o": [
          "Stack",
          "Priority queue",
          "Binary tree",
          "Queue"
        ],
        "a": 3
      },
      {
        "id": "u4_m10",
        "q": "Dijkstra's algorithm does not work correctly for graphs containing which kind of edges?",
        "o": [
          "Negative weight edges",
          "Zero weight edges",
          "Positive weight edges",
          "Undirected edges"
        ],
        "a": 0
      },
      {
        "id": "u4_m11",
        "q": "In a connected undirected graph, what is an articulation point?",
        "o": [
          "A vertex with the highest degree",
          "A vertex whose removal disconnects the graph",
          "A vertex with no edges",
          "A vertex that has a self-loop"
        ],
        "a": 1
      },
      {
        "id": "u4_m12",
        "q": "What is the space complexity of the adjacency matrix representation of a graph with n vertices?",
        "o": [
          "O(n)",
          "O(log n)",
          "O(n²)",
          "O(n + e)"
        ],
        "a": 2
      },
      {
        "id": "u4_m13",
        "q": "How many edges does a minimum spanning tree of a connected graph with n vertices have?",
        "o": [
          "n",
          "n - 1",
          "n + 1",
          "n - 2"
        ],
        "a": 1
      },
      {
        "id": "u4_m14",
        "q": "Which step is used by Kruskal's algorithm to build a minimum spanning tree?",
        "o": [
          "Start from a source vertex and relax its edges",
          "Pick the cheapest edge leaving the current tree",
          "Visit vertices level by level",
          "Add the smallest-weight edge that does not form a cycle"
        ],
        "a": 3
      },
      {
        "id": "u4_m15",
        "q": "How does Prim's algorithm build a minimum spanning tree?",
        "o": [
          "By sorting all edges and adding them in order of weight",
          "By repeatedly removing the heaviest edge from every cycle",
          "By growing a single tree from a start vertex, adding the cheapest edge to a new vertex each time",
          "By visiting vertices in topological order"
        ],
        "a": 2
      },
      {
        "id": "u4_m16",
        "q": "What is the output of the following C code, which runs BFS from vertex 0?",
        "code": "#include <stdio.h>\nint main() {\n    int g[4][4] = {{0,1,0,1},{1,0,1,0},{0,1,0,1},{1,0,1,0}};\n    int q[10], front = 0, rear = 0;\n    int visited[4] = {0};\n    int i, v;\n    q[rear++] = 0;\n    visited[0] = 1;\n    while (front < rear) {\n        v = q[front++];\n        printf(\"%d \", v);\n        for (i = 0; i < 4; i++) {\n            if (g[v][i] && !visited[i]) {\n                visited[i] = 1;\n                q[rear++] = i;\n            }\n        }\n    }\n    return 0;\n}",
        "o": [
          "0 1 3 2",
          "0 1 2 3",
          "0 2 1 3",
          "0 3 1 2"
        ],
        "a": 0
      },
      {
        "id": "u4_m17",
        "q": "What is the output of the following C code, which relaxes edges through vertex 2 after the first step of Dijkstra's algorithm from vertex 0?",
        "code": "#include <stdio.h>\nint main() {\n    int w[3][3] = {{0,4,1},{4,0,2},{1,2,0}};\n    int dist[3];\n    for (int i = 0; i < 3; i++)\n        dist[i] = w[0][i];\n    for (int i = 0; i < 3; i++) {\n        if (dist[2] + w[2][i] < dist[i])\n            dist[i] = dist[2] + w[2][i];\n    }\n    printf(\"%d %d %d\", dist[0], dist[1], dist[2]);\n    return 0;\n}",
        "o": [
          "0 3 1",
          "0 4 1",
          "0 3 2",
          "0 5 1"
        ],
        "a": 0
      },
      {
        "id": "u4_m18",
        "q": "What is the output of the following C code, which computes the in-degree of each vertex of a directed graph?",
        "code": "#include <stdio.h>\nint main() {\n    int g[4][4] = {{0,1,1,0},{0,0,0,0},{0,0,1,0},{0,0,0,0}};\n    int indeg[4] = {0};\n    int i, j;\n    for (i = 0; i < 4; i++)\n        for (j = 0; j < 4; j++)\n            indeg[j] += g[i][j];\n    for (i = 0; i < 4; i++)\n        printf(\"%d \", indeg[i]);\n    return 0;\n}",
        "o": [
          "2 1 1 0",
          "0 2 1 1",
          "1 1 1 1",
          "0 1 1 2"
        ],
        "a": -1,
        "ansText": "0 1 2 0",
        "ansNote": "The answer key prints \"0 1 2 0\", which is not one of the four options. This question is scored as a bonus when answered."
      },
      {
        "id": "u4_m19",
        "q": "What is the output of the following C code?",
        "code": "#include <stdio.h>\nint main() {\n    int g[4][4] = {{0,1,1,0},{1,0,1,1},{1,1,0,0},{0,1,0,0}};\n    int i, j, deg = 0, total = 0;\n    for (i = 0; i < 4; i++) {\n        for (j = 0; j < 4; j++) {\n            total += g[i][j];\n            if (i == 1)\n                deg += g[i][j];\n        }\n    }\n    printf(\"%d %d\", deg, total / 2);\n    return 0;\n}",
        "o": [
          "3 4",
          "3 8",
          "4 3",
          "2 4"
        ],
        "a": 0
      },
      {
        "id": "u4_m20",
        "q": "What is the output of the following C code, which runs DFS from vertex 0?",
        "code": "#include <stdio.h>\nint g[5][5] = {{0,1,0,0,1},{1,0,1,0,1},{0,1,0,1,0},{0,0,1,0,1},{1,1,0,1,0}};\nint visited[5];\nvoid dfs(int v) {\n    int i;\n    visited[v] = 1;\n    printf(\"%d \", v);\n    for (i = 0; i < 5; i++) {\n        if (g[v][i] && !visited[i])\n            dfs(i);\n    }\n}\nint main() {\n    dfs(0);\n    return 0;\n}",
        "o": [
          "0 1 2 3 4",
          "0 2 1 3 4",
          "0 1 3 4 2",
          "0 1 2 4 3"
        ],
        "a": 0
      }
    ],
    "debug": [
      {
        "id": "u4_d1",
        "title": "Q1. Topological Sort",
        "ps": "Ishaan plans the courses of a degree. The courses are numbered from 0 to v - 1. A prerequisite \"a b\" means course a must be completed before course b. The courses form a directed acyclic graph (DAG).\n\nDebug the topoSort() function so that it prints the topological order, repeatedly choosing the smallest-numbered course with in-degree 0.",
        "inFmt": "The first line contains two integers v and e.\n\nThe next e lines contain two integers a and b representing a directed edge from a to b.",
        "outFmt": "Print \"Topological Order: \" followed by the course numbers separated by spaces.\n\nThe courses form a directed acyclic graph (DAG).",
        "cons": "1 <= v <= 15\n0 <= e <= 50\n0 <= a, b < v",
        "sampleIn": "4 4\n0 1\n0 2\n1 3\n2 3",
        "sampleOut": "Topological Order: 0 1 2 3",
        "header": "#include <stdio.h>\nint adj[15][15];\nvoid addEdge(int a, int b) { adj[a][b] = 1; }",
        "buggy": "void topoSort(int v) {\n  int indeg[15] = {0};\n  int done[15] = {0};\n  for (int i = 0; i < v; i++)\n    for (int j = 0; j < v; j++) indeg[j] += adj[i][j];\n  printf(\"Topological Order:\");\n  for (int count = 0; count < v; count++) {\n    for (int u = 0; u < v; u++) {\n      if (done[u] == 0 && indeg[u] == 1) {\n        printf(\" %d\", u);\n        done[u] = 1;\n        break;\n      }\n    }\n  }\n  printf(\"\\n\");\n}",
        "footer": "int main() {\n  int v, e;\n  scanf(\"%d %d\", &v, &e);\n  for (int i = 0; i < e; i++) {\n    int a, b;\n    scanf(\"%d %d\", &a, &b);\n    addEdge(a, b);\n  }\n  topoSort(v);\n  return 0;\n}",
        "samples": [
          {
            "input": "4 4\n0 1\n0 2\n1 3\n2 3",
            "expected": "Topological Order: 0 1 2 3"
          },
          {
            "input": "3 2\n2 1\n1 0",
            "expected": "Topological Order: 2 1 0"
          }
        ],
        "hidden_cases": [
          {
            "input": "4 4\n0 1\n0 2\n1 3\n2 3",
            "expected": "Topological Order: 0 1 2 3"
          },
          {
            "input": "3 2\n2 1\n1 0",
            "expected": "Topological Order: 2 1 0"
          },
          {
            "input": "1 0",
            "expected": "Topological Order: 0"
          },
          {
            "input": "4 3\n3 2\n2 1\n1 0",
            "expected": "Topological Order: 3 2 1 0"
          },
          {
            "input": "5 5\n0 2\n0 3\n1 3\n1 4\n2 4",
            "expected": "Topological Order: 0 1 2 3 4"
          },
          {
            "input": "7 8\n0 1\n0 2\n1 3\n2 3\n3 4\n5 4\n5 6\n6 4",
            "expected": "Topological Order: 0 1 2 3 5 6 4"
          }
        ],
        "sol": "void topoSort(int v) {\n  int indeg[15] = {0};\n  int done[15] = {0};\n  for (int i = 0; i < v; i++)\n    for (int j = 0; j < v; j++) indeg[j] += adj[i][j];\n  printf(\"Topological Order:\");\n  for (int count = 0; count < v; count++) {\n    for (int u = 0; u < v; u++) {\n      if (done[u] == 0 && indeg[u] == 0) {\n        printf(\" %d\", u);\n        done[u] = 1;\n        for (int w = 0; w < v; w++) {\n          indeg[w] -= adj[u][w];\n        }\n        break;\n      }\n    }\n  }\n  printf(\"\\n\");\n}"
      },
      {
        "id": "u4_d2",
        "title": "Q2. Undirected Graph using Adjacency Lists",
        "ps": "Divya is building a social app in which students are numbered from 0 to v - 1. A friendship works in both directions.\n\nDebug addEdge() and printLists() so that every friendship is stored in both students' adjacency lists and the lists are printed in insertion order.",
        "inFmt": "The first line contains two integers v and e.\n\nThe next e lines contain two integers a and b representing a friendship between students a and b.",
        "outFmt": "Print each vertex followed by \":\" and its adjacent vertices separated by spaces.",
        "cons": "1 <= v <= 15\n0 <= e <= 50\n0 <= a, b < v",
        "sampleIn": "3 2\n2 0\n2 1",
        "sampleOut": "0: 2\n1: 2\n2: 0 1",
        "header": "#include <stdio.h>\nint list[15][15];\nint cnt[15];",
        "buggy": "void addEdge(int a, int b) {\n  list[a][cnt[a]++] = b;\n}",
        "footer": "void printLists(int v) {\n  for (int i = 0; i < v; i++) {\n    printf(\"%d:\", i);\n    for (int j = 0; j < cnt[i]; j++)\n      printf(\" %d\", list[i][j]);\n    printf(\"\\n\");\n  }\n}\nint main() {\n  int v, e;\n  scanf(\"%d %d\", &v, &e);\n  for (int i = 0; i < e; i++) {\n    int a, b;\n    scanf(\"%d %d\", &a, &b);\n    addEdge(a, b);\n  }\n  printLists(v);\n  return 0;\n}",
        "samples": [
          {
            "input": "3 2\n2 0\n2 1",
            "expected": "0: 2\n1: 2\n2: 0 1"
          },
          {
            "input": "4 3\n3 0\n3 1\n0 1",
            "expected": "0: 3 1\n1: 3 0\n2:\n3: 0 1"
          }
        ],
        "hidden_cases": [
        {
          "input": "6 4\n4 5\n0 5\n1 3\n0 4",
          "expected": "0: 5 4\n1: 3\n2:\n3: 1\n4: 5 0\n5: 4 0"
        },
        {
          "input": "3 3\n1 2\n0 1\n0 2",
          "expected": "0: 1 2\n1: 2 0\n2: 1 0"
        },
        {
          "input": "4 2\n1 3\n0 1",
          "expected": "0: 1\n1: 3 0\n2:\n3: 1"
        },
        {
          "input": "2 1\n0 1",
          "expected": "0: 1\n1: 0"
        },
        {
          "input": "6 5\n0 5\n1 5\n1 4\n3 5\n2 4",
          "expected": "0: 5\n1: 5 4\n2: 4\n3: 5\n4: 1 2\n5: 0 1 3"
        },
        {
          "input": "3 2\n0 2\n0 1",
          "expected": "0: 2 1\n1: 0\n2: 0"
        }
      ],
        "sol": "void addEdge(int a, int b) {\n  list[a][cnt[a]++] = b;\n  list[b][cnt[b]++] = a;\n}"
      },
      {
        "id": "u4_d3",
        "title": "Q3. In-degree and Out-degree of a Directed Graph",
        "ps": "Gokul studies a city with one-way roads. Junctions are numbered from 0 to v - 1. The roads are stored in an adjacency matrix.\n\nThe out-degree is the number of roads starting from a vertex, and the in-degree is the number of roads ending at a vertex.\n\nDebug printDegrees() to calculate and print the in-degree and out-degree of every vertex.",
        "inFmt": "The first line contains two integers v and e.\n\nThe next e lines contain two integers a and b representing a directed edge from a to b.",
        "outFmt": "Print each line in the format:\n\nVertex i: In=x Out=y",
        "cons": "1 <= v <= 15\n0 <= e <= 50\n0 <= a, b < v",
        "sampleIn": "3 2\n0 1\n0 2",
        "sampleOut": "Vertex 0: In=0 Out=2\nVertex 1: In=1 Out=0\nVertex 2: In=1 Out=0",
        "header": "#include <stdio.h>\nint adj[15][15];\nvoid addEdge(int a, int b) { adj[a][b] = 1; }",
        "buggy": "void printDegrees(int v) {\n  for (int i = 0; i < v; i++) {\n    int in, out;\n    for (int j = 0; j < v; j++) {\n      in += adj[i][j];\n      out += adj[j][i];\n    }\n    printf(\"Vertex %d: In=%d Out=%d\\n\", i, in, out);\n  }\n}",
        "footer": "int main() {\n  int v, e;\n  scanf(\"%d %d\", &v, &e);\n  for (int i = 0; i < e; i++) {\n    int a, b;\n    scanf(\"%d %d\", &a, &b);\n    addEdge(a, b);\n  }\n  printDegrees(v);\n  return 0;\n}",
        "samples": [
          {
            "input": "3 2\n0 1\n0 2",
            "expected": "Vertex 0: In=0 Out=2\nVertex 1: In=1 Out=0\nVertex 2: In=1 Out=0"
          },
          {
            "input": "4 3\n1 0\n2 0\n3 0",
            "expected": "Vertex 0: In=3 Out=0\nVertex 1: In=0 Out=1\nVertex 2: In=0 Out=1\nVertex 3: In=0 Out=1"
          }
        ],
        "hidden_cases": [
          {
            "input": "3 2\n0 1\n0 2",
            "expected": "Vertex 0: In=0 Out=2\nVertex 1: In=1 Out=0\nVertex 2: In=1 Out=0"
          },
          {
            "input": "4 3\n1 0\n2 0\n3 0",
            "expected": "Vertex 0: In=3 Out=0\nVertex 1: In=0 Out=1\nVertex 2: In=0 Out=1\nVertex 3: In=0 Out=1"
          },
          {
            "input": "3 0",
            "expected": "Vertex 0: In=0 Out=0\nVertex 1: In=0 Out=0\nVertex 2: In=0 Out=0"
          },
          {
            "input": "5 5\n1 0\n2 0\n3 0\n4 0\n0 1",
            "expected": "Vertex 0: In=4 Out=1\nVertex 1: In=1 Out=1\nVertex 2: In=0 Out=1\nVertex 3: In=0 Out=1\nVertex 4: In=0 Out=1"
          },
          {
            "input": "6 7\n0 1\n0 2\n1 3\n2 3\n3 4\n4 5\n5 0",
            "expected": "Vertex 0: In=1 Out=2\nVertex 1: In=1 Out=1\nVertex 2: In=1 Out=1\nVertex 3: In=2 Out=1\nVertex 4: In=1 Out=1\nVertex 5: In=1 Out=1"
          },
          {
            "input": "5 6\n0 4\n1 4\n2 4\n3 4\n4 0\n0 1",
            "expected": "Vertex 0: In=1 Out=2\nVertex 1: In=1 Out=1\nVertex 2: In=0 Out=1\nVertex 3: In=0 Out=1\nVertex 4: In=4 Out=1"
          }
        ],
        "sol": "void printDegrees(int v) {\n  for (int i = 0; i < v; i++) {\n    int in = 0, out = 0;\n    for (int j = 0; j < v; j++) {\n      out += adj[i][j];\n      in += adj[j][i];\n    }\n    printf(\"Vertex %d: In=%d Out=%d\\n\", i, in, out);\n  }\n}"
      },
      {
        "id": "u4_d4",
        "title": "Q4. Minimum Spanning Tree using Prim's Algorithm",
        "ps": "Hari needs to connect campus buildings with the least total cable length. The buildings are numbered from 0 to v - 1, and cable lengths are stored in a weighted adjacency matrix.\n\nPrim's algorithm starts from building 0 and repeatedly adds the cheapest connection to a building not yet included in the minimum spanning tree.\n\nDebug primMST() to return the total weight of the minimum spanning tree.",
        "inFmt": "The first line contains two integers v and e.\n\nThe next e lines contain three integers a, b, and w representing an undirected weighted edge.",
        "outFmt": "Print \"MST Weight: \" followed by the total weight.\n\n1 <= w <= 100",
        "cons": "1 <= v <= 15\n0 <= e <= 50\n0 <= a, b < v",
        "sampleIn": "4 3\n0 1 1\n1 2 2\n2 3 3",
        "sampleOut": "MST Weight: 6",
        "header": "#include <stdio.h>\nint graph[15][15];\nvoid addEdge(int a, int b, int w) {\n  graph[a][b] = w;\n  graph[b][a] = w;\n}",
        "buggy": "int primMST(int v) {\n  int key[15];\n  int inMST[15] = {0};\n  for (int i = 0; i < v; i++) key[i] = 1000000;\n  key[0] = 0;\n  int total = 0;\n  for (int count = 0; count < v; count++) {\n    int u = -1;\n    for (int i = 0; i < v; i++)\n      if (inMST[i] == 0 && (u == -1 || key[i] < key[u]))\n        u = i;\n    total += key[u];\n    for (int w = 0; w < v; w++)\n      if (graph[u][w] > 0 && graph[u][w] < key[w])\n        key[w] = graph[u][w];\n  }\n  return total;\n}",
        "footer": "int main() {\n  int v, e;\n  scanf(\"%d %d\", &v, &e);\n  for (int i = 0; i < e; i++) {\n    int a, b, w;\n    scanf(\"%d %d %d\", &a, &b, &w);\n    addEdge(a, b, w);\n  }\n  printf(\"MST Weight: %d\\n\", primMST(v));\n  return 0;\n}",
        "samples": [
          {
            "input": "4 3\n0 1 1\n1 2 2\n2 3 3",
            "expected": "MST Weight: 6"
          },
          {
            "input": "3 3\n0 1 7\n1 2 3\n0 2 4",
            "expected": "MST Weight: 7"
          }
        ],
        "hidden_cases": [
        {
          "input": "5 5\n0 1 1\n1 3 6\n1 2 17\n0 2 15\n3 4 6",
          "expected": "MST Weight: 28"
        },
        {
          "input": "5 4\n3 4 8\n0 3 9\n0 1 8\n1 2 5",
          "expected": "MST Weight: 30"
        },
        {
          "input": "6 6\n2 5 4\n0 1 17\n0 5 16\n2 3 3\n1 2 1\n0 4 11",
          "expected": "MST Weight: 35"
        },
        {
          "input": "3 2\n0 1 1\n1 2 15",
          "expected": "MST Weight: 16"
        },
        {
          "input": "6 6\n3 5 13\n0 1 13\n0 2 2\n1 3 12\n0 5 14\n1 4 5",
          "expected": "MST Weight: 45"
        },
        {
          "input": "3 2\n1 2 1\n0 1 17",
          "expected": "MST Weight: 18"
        }
      ],
        "sol": "int primMST(int v) {\n  int key[15];\n  int inMST[15] = {0};\n  for (int i = 0; i < v; i++) key[i] = 1000000;\n  key[0] = 0;\n  int total = 0;\n  for (int count = 0; count < v; count++) {\n    int u = -1;\n    for (int i = 0; i < v; i++)\n      if (inMST[i] == 0 && (u == -1 || key[i] < key[u]))\n        u = i;\n    inMST[u] = 1;\n    total += key[u];\n    for (int w = 0; w < v; w++) {\n      if (graph[u][w] > 0 && inMST[w] == 0 &&\n          graph[u][w] < key[w]) {\n        key[w] = graph[u][w];\n      }\n    }\n  }\n  return total;\n}"
      },
      {
        "id": "u4_d5",
        "title": "Q5. Shortest Path using Dijkstra's Algorithm",
        "ps": "Pooja runs a courier service in a town whose two-way roads have lengths in kilometres. The junctions are numbered from 0 to v - 1, and roads are stored in a weighted adjacency matrix.\n\nDijkstra's algorithm finds the shortest distance from a source junction to every other junction.\n\nDebug dijkstra() so that the program prints the shortest distances.",
        "inFmt": "The first line contains two integers v and e.\n\nThe next e lines contain three integers a, b, and w representing an undirected weighted edge.\n\nThe last line contains the source vertex src.",
        "outFmt": "Print each line in the format:\n\nDistance to i: distance\n\n1 <= w <= 100",
        "cons": "1 <= v <= 15\n0 <= e <= 50\n0 <= a, b, src < v",
        "sampleIn": "3 3\n0 1 2\n1 2 2\n0 2 5\n0",
        "sampleOut": "Distance to 0: 0\nDistance to 1: 2\nDistance to 2: 4",
        "header": "#include <stdio.h>\nint graph[15][15];\nvoid addEdge(int a, int b, int w) {\n  graph[a][b] = w;\n  graph[b][a] = w;\n}",
        "buggy": "void dijkstra(int v, int src) {\n  int dist[15];\n  int visited[15] = {0};\n  for (int i = 0; i < v; i++) dist[i] = 1000000;\n  dist[src] = 0;\n  for (int count = 0; count < v - 1; count++) {\n    int u = -1;\n    for (int i = 0; i < v; i++)\n      if (u == -1 || dist[i] < dist[u])\n        u = i;\n    visited[u] = 1;\n    for (int w = 0; w < v; w++) {\n      if (graph[u][w] > 0 &&\n          dist[u] + graph[u][w] < dist[w]) {\n        dist[w] = dist[u] + graph[u][w];\n      }\n    }\n  }\n  for (int i = 0; i < v; i++)\n    printf(\"Distance to %d: %d\\n\", i, dist[i]);\n}",
        "footer": "int main() {\n  int v, e, src;\n  scanf(\"%d %d\", &v, &e);\n  for (int i = 0; i < e; i++) {\n    int a, b, w;\n    scanf(\"%d %d %d\", &a, &b, &w);\n    addEdge(a, b, w);\n  }\n  scanf(\"%d\", &src);\n  dijkstra(v, src);\n  return 0;\n}",
        "samples": [
          {
            "input": "3 3\n0 1 2\n1 2 2\n0 2 5\n0",
            "expected": "Distance to 0: 0\nDistance to 1: 2\nDistance to 2: 4"
          },
          {
            "input": "4 4\n0 1 1\n1 2 1\n2 3 1\n0 3 10\n3",
            "expected": "Distance to 0: 3\nDistance to 1: 2\nDistance to 2: 1\nDistance to 3: 0"
          }
        ],
        "hidden_cases": [
        {
          "input": "4 5\n1 2 1\n2 3 13\n0 1 4\n0 3 6\n1 3 9\n3",
          "expected": "Distance to 0: 6\nDistance to 1: 9\nDistance to 2: 10\nDistance to 3: 0"
        },
        {
          "input": "6 5\n1 2 2\n2 3 20\n0 5 13\n3 4 3\n0 1 3\n3",
          "expected": "Distance to 0: 25\nDistance to 1: 22\nDistance to 2: 20\nDistance to 3: 0\nDistance to 4: 3\nDistance to 5: 38"
        },
        {
          "input": "4 5\n0 1 4\n0 2 12\n0 3 14\n2 3 19\n1 2 1\n1",
          "expected": "Distance to 0: 4\nDistance to 1: 0\nDistance to 2: 1\nDistance to 3: 18"
        },
        {
          "input": "4 5\n0 1 1\n0 2 7\n0 3 11\n1 2 19\n2 3 5\n3",
          "expected": "Distance to 0: 11\nDistance to 1: 12\nDistance to 2: 5\nDistance to 3: 0"
        },
        {
          "input": "4 4\n0 1 6\n0 3 15\n0 2 17\n2 3 17\n2",
          "expected": "Distance to 0: 17\nDistance to 1: 23\nDistance to 2: 0\nDistance to 3: 17"
        },
        {
          "input": "6 6\n0 3 18\n1 2 12\n2 4 10\n0 4 1\n0 1 18\n0 5 18\n3",
          "expected": "Distance to 0: 18\nDistance to 1: 36\nDistance to 2: 29\nDistance to 3: 0\nDistance to 4: 19\nDistance to 5: 36"
        }
      ],
        "sol": "void dijkstra(int v, int src) {\n  int dist[15];\n  int visited[15] = {0};\n  for (int i = 0; i < v; i++) dist[i] = 1000000;\n  dist[src] = 0;\n  for (int count = 0; count < v - 1; count++) {\n    int u = -1;\n    for (int i = 0; i < v; i++) {\n      if (visited[i] == 0 &&\n          (u == -1 || dist[i] < dist[u])) {\n        u = i;\n      }\n    }\n    visited[u] = 1;\n    for (int w = 0; w < v; w++) {\n      if (graph[u][w] > 0 && dist[u] != 1000000 &&\n          dist[u] + graph[u][w] < dist[w]) {\n        dist[w] = dist[u] + graph[u][w];\n      }\n    }\n  }\n  for (int i = 0; i < v; i++)\n    printf(\"Distance to %d: %d\\n\", i, dist[i]);\n}"
      }],
    "cod": [
      {
        "id": "u4_c1",
        "title": "Q1. BREADTH-FIRST SEARCH (BFS)",
        "ps": "Divya is a student coordinator who forwards an announcement through a friendship network. The students are numbered from 0 to v - 1, and two friends can pass the message to each other, so the network is an undirected graph.\n\nWrite a program that performs a breadth-first traversal from the given starting student using a queue and prints the students in the order they receive the message. When a student has several unvisited friends, visit them in increasing order of their number. Students who cannot be reached from the starting student are not printed.",
        "sampleIn": "4 3\n0 1\n0 2\n2 3\n0",
        "sampleOut": "BFS Order: 0 1 2 3",
        "hidden": [
          {
            "input": "4 3\n0 1\n0 2\n2 3\n0\n",
            "expected": "BFS Order: 0 1 2 3"
          },
          {
            "input": "5 4\n1 0\n1 2\n1 3\n3 4\n3\n",
            "expected": "BFS Order: 3 1 4 0 2"
          },
          {
            "input": "5 4\n0 1\n0 2\n1 3\n2 4\n0\n",
            "expected": "BFS Order: 0 1 2 3 4"
          },
          {
            "input": "1 0\n0\n",
            "expected": "BFS Order: 0"
          },
          {
            "input": "6 6\n0 1\n0 2\n1 3\n2 3\n3 4\n4 5\n0\n",
            "expected": "BFS Order: 0 1 2 3 4 5"
          },
          {
            "input": "6 3\n0 1\n2 3\n4 5\n2\n",
            "expected": "BFS Order: 2 3"
          }
        ],
        "sol": "#include <stdio.h>\nint main() {\n    int v, e, s;\n    int adj[15][15] = {0};\n    int visited[15] = {0};\n    int queue[15];\n    int front = 0, rear = 0;\n    scanf(\"%d %d\", &v, &e);\n    for (int i = 0; i < e; i++) {\n        int a, b;\n        scanf(\"%d %d\", &a, &b);\n        adj[a][b] = 1;\n        adj[b][a] = 1;\n    }\n    scanf(\"%d\", &s);\n    visited[s] = 1;\n    queue[rear++] = s;\n    printf(\"BFS Order:\");\n    while (front < rear) {\n        int u = queue[front++];\n        printf(\" %d\", u);\n        for (int w = 0; w < v; w++) {\n            if (adj[u][w] == 1 && visited[w] == 0) {\n                visited[w] = 1;\n                queue[rear++] = w;\n            }\n        }\n    }\n    printf(\"\\n\");\n    return 0;\n}",
        "samples": [
          {
            "input": "4 3\n0 1\n0 2\n2 3\n0",
            "expected": "BFS Order: 0 1 2 3"
          },
          {
            "input": "5 4\n1 0\n1 2\n1 3\n3 4\n3",
            "expected": "BFS Order: 3 1 4 0 2"
          }
        ],
        "hidden_cases": [
          {
            "input": "5 4\n0 1\n0 2\n1 3\n2 4\n0\n",
            "expected": "BFS Order: 0 1 2 3 4"
          },
          {
            "input": "1 0\n0\n",
            "expected": "BFS Order: 0"
          },
          {
            "input": "6 6\n0 1\n0 2\n1 3\n2 3\n3 4\n4 5\n0\n",
            "expected": "BFS Order: 0 1 2 3 4 5"
          },
          {
            "input": "6 3\n0 1\n2 3\n4 5\n2\n",
            "expected": "BFS Order: 2 3"
          }
        ],
        "inFmt": "The first line contains two space-separated integers v and e, representing the number of students and friendships.\n\nThe next e lines contain two integers a and b, representing a friendship between students a and b.\n\nThe last line contains an integer s, representing the starting student.",
        "outFmt": "Print \"BFS Order: \" followed by the visited students separated by spaces.",
        "cons": "1 <= v <= 10\n0 <= e <= v * (v - 1) / 2\n0 <= a, b, s < v\nThere are no self-loops or repeated friendships."
      },
      {
        "id": "u4_c2",
        "title": "Q2. ADJACENCY MATRIX OF AN UNDIRECTED GRAPH",
        "ps": "Ishaan is mapping the two-way roads between villages in a district. The villages are numbered from 0 to v - 1, and every road connects two villages in both directions.\n\nWrite a program that reads the number of villages and roads and prints the adjacency matrix. The entry at row i and column j is 1 if a road exists between village i and village j; otherwise, it is 0.",
        "sampleIn": "3 2\n0 1\n1 2",
        "sampleOut": "0 1 0\n1 0 1\n0 1 0",
        "hidden": [
          {
            "input": "3 2\n0 1\n1 2\n",
            "expected": "0 1 0\n1 0 1\n0 1 0"
          },
          {
            "input": "4 3\n0 3\n1 3\n2 3\n",
            "expected": "0 0 0 1\n0 0 0 1\n0 0 0 1\n1 1 1 0"
          },
          {
            "input": "4 3\n0 1\n1 2\n2 3\n",
            "expected": "0 1 0 0\n1 0 1 0\n0 1 0 1\n0 0 1 0"
          },
          {
            "input": "3 0\n",
            "expected": "0 0 0\n0 0 0\n0 0 0"
          },
          {
            "input": "5 4\n0 1\n0 2\n0 3\n0 4\n",
            "expected": "0 1 1 1 1\n1 0 0 0 0\n1 0 0 0 0\n1 0 0 0 0\n1 0 0 0 0"
          },
          {
            "input": "4 6\n0 1\n0 2\n0 3\n1 2\n1 3\n2 3\n",
            "expected": "0 1 1 1\n1 0 1 1\n1 1 0 1\n1 1 1 0"
          }
        ],
        "sol": "#include <stdio.h>\nint main() {\n    int v, e;\n    int adj[15][15] = {0};\n    scanf(\"%d %d\", &v, &e);\n    for (int i = 0; i < e; i++) {\n        int a, b;\n        scanf(\"%d %d\", &a, &b);\n        adj[a][b] = 1;\n        adj[b][a] = 1;\n    }\n    for (int i = 0; i < v; i++) {\n        for (int j = 0; j < v; j++) {\n            if (j > 0) printf(\" \");\n            printf(\"%d\", adj[i][j]);\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}",
        "samples": [
          {
            "input": "3 2\n0 1\n1 2",
            "expected": "0 1 0\n1 0 1\n0 1 0"
          },
          {
            "input": "4 3\n0 3\n1 3\n2 3",
            "expected": "0 0 0 1\n0 0 0 1\n0 0 0 1\n1 1 1 0"
          }
        ],
        "hidden_cases": [
          {
            "input": "4 3\n0 1\n1 2\n2 3\n",
            "expected": "0 1 0 0\n1 0 1 0\n0 1 0 1\n0 0 1 0"
          },
          {
            "input": "3 0\n",
            "expected": "0 0 0\n0 0 0\n0 0 0"
          },
          {
            "input": "5 4\n0 1\n0 2\n0 3\n0 4\n",
            "expected": "0 1 1 1 1\n1 0 0 0 0\n1 0 0 0 0\n1 0 0 0 0\n1 0 0 0 0"
          },
          {
            "input": "4 6\n0 1\n0 2\n0 3\n1 2\n1 3\n2 3\n",
            "expected": "0 1 1 1\n1 0 1 1\n1 1 0 1\n1 1 1 0"
          }
        ],
        "inFmt": "The first line contains two space-separated integers v and e, representing the number of villages and roads.\n\nThe next e lines contain two integers a and b, representing a road between villages a and b.",
        "outFmt": "Print v lines, each containing v space-separated integers representing the adjacency matrix.",
        "cons": "1 <= v <= 10\n0 <= e <= v * (v - 1) / 2\n0 <= a, b < v\nThere are no self-loops or repeated roads."
      },
      {
        "id": "u4_c3",
        "title": "Q3. DEPTH-FIRST SEARCH (DFS)",
        "ps": "Gokul is testing the navigation module of a delivery app in a city that has only one-way roads. The junctions are numbered from 0 to v - 1, and a road from a to b can be travelled only from a to b.\n\nWrite a program that performs a depth-first traversal from the given starting junction. Always visit the smallest-numbered unvisited junction reachable by a road first. Junctions that cannot be reached from the starting junction are not printed.",
        "sampleIn": "4 4\n0 1\n0 2\n1 3\n2 3\n0",
        "sampleOut": "DFS Order: 0 1 3 2",
        "hidden": [
          {
            "input": "4 4\n0 1\n0 2\n1 3\n2 3\n0\n",
            "expected": "DFS Order: 0 1 3 2"
          },
          {
            "input": "3 2\n2 1\n1 0\n2\n",
            "expected": "DFS Order: 2 1 0"
          },
          {
            "input": "5 5\n0 1\n0 2\n1 3\n2 3\n3 4\n0\n",
            "expected": "DFS Order: 0 1 3 4 2"
          },
          {
            "input": "1 0\n0\n",
            "expected": "DFS Order: 0"
          },
          {
            "input": "4 3\n0 1\n1 2\n2 3\n0\n",
            "expected": "DFS Order: 0 1 2 3"
          },
          {
            "input": "4 3\n1 0\n2 0\n3 0\n1\n",
            "expected": "DFS Order: 1 0"
          }
        ],
        "sol": "#include <stdio.h>\nint v;\nint adj[15][15];\nint visited[15];\nvoid dfs(int u) {\n    visited[u] = 1;\n    printf(\" %d\", u);\n    for (int w = 0; w < v; w++) {\n        if (adj[u][w] == 1 && visited[w] == 0) {\n            dfs(w);\n        }\n    }\n}\nint main() {\n    int e, s;\n    scanf(\"%d %d\", &v, &e);\n    for (int i = 0; i < e; i++) {\n        int a, b;\n        scanf(\"%d %d\", &a, &b);\n        adj[a][b] = 1;\n    }\n    scanf(\"%d\", &s);\n    printf(\"DFS Order:\");\n    dfs(s);\n    printf(\"\\n\");\n    return 0;\n}",
        "samples": [
          {
            "input": "4 4\n0 1\n0 2\n1 3\n2 3\n0",
            "expected": "DFS Order: 0 1 3 2"
          },
          {
            "input": "3 2\n2 1\n1 0\n2",
            "expected": "DFS Order: 2 1 0"
          }
        ],
        "hidden_cases": [
          {
            "input": "5 5\n0 1\n0 2\n1 3\n2 3\n3 4\n0\n",
            "expected": "DFS Order: 0 1 3 4 2"
          },
          {
            "input": "1 0\n0\n",
            "expected": "DFS Order: 0"
          },
          {
            "input": "4 3\n0 1\n1 2\n2 3\n0\n",
            "expected": "DFS Order: 0 1 2 3"
          },
          {
            "input": "4 3\n1 0\n2 0\n3 0\n1\n",
            "expected": "DFS Order: 1 0"
          }
        ],
        "inFmt": "The first line contains two space-separated integers v and e, representing the number of junctions and one-way roads.\n\nThe next e lines contain two integers a and b, representing a directed edge from a to b.\n\nThe last line contains an integer s, representing the starting junction.",
        "outFmt": "Print \"DFS Order: \" followed by the visited junctions separated by spaces.",
        "cons": "1 <= v <= 10\n0 <= e <= v * (v - 1)\n0 <= a, b, s < v\nThere are no self-loops or repeated roads."
      },
      {
        "id": "u4_c4",
        "title": "Q4. CHECK WHETHER AN EULER CIRCUIT EXISTS",
        "ps": "Hema is planning the route of a street-cleaning truck in a small town. The truck must start at a junction, travel through every street exactly once, and return to its starting junction. This route is called an Euler circuit.\n\nA connected undirected graph has an Euler circuit if and only if every vertex has an even degree.\n\nWrite a program that determines whether an Euler circuit exists.",
        "sampleIn": "4 4\n0 1\n1 2\n2 3\n3 0",
        "sampleOut": "Euler Circuit Exists",
        "hidden": [
          {
            "input": "4 4\n0 1\n1 2\n2 3\n3 0\n",
            "expected": "Euler Circuit Exists"
          },
          {
            "input": "3 2\n0 1\n1 2\n",
            "expected": "Euler Circuit Does Not Exist"
          },
          {
            "input": "3 3\n0 1\n1 2\n2 0\n",
            "expected": "Euler Circuit Exists"
          },
          {
            "input": "4 3\n0 1\n1 2\n2 3\n",
            "expected": "Euler Circuit Does Not Exist"
          },
          {
            "input": "5 6\n0 1\n1 2\n2 0\n2 3\n3 4\n4 2\n",
            "expected": "Euler Circuit Exists"
          },
          {
            "input": "4 6\n0 1\n0 2\n0 3\n1 2\n1 3\n2 3\n",
            "expected": "Euler Circuit Does Not Exist"
          }
        ],
        "sol": "#include <stdio.h>\nint main() {\n    int v, e;\n    int deg[15] = {0};\n    int allEven = 1;\n    scanf(\"%d %d\", &v, &e);\n    for (int i = 0; i < e; i++) {\n        int a, b;\n        scanf(\"%d %d\", &a, &b);\n        deg[a]++;\n        deg[b]++;\n    }\n    for (int i = 0; i < v; i++) {\n        if (deg[i] % 2 != 0) allEven = 0;\n    }\n    if (allEven) printf(\"Euler Circuit Exists\\n\");\n    else printf(\"Euler Circuit Does Not Exist\\n\");\n    return 0;\n}",
        "samples": [
          {
            "input": "4 4\n0 1\n1 2\n2 3\n3 0",
            "expected": "Euler Circuit Exists"
          },
          {
            "input": "3 2\n0 1\n1 2",
            "expected": "Euler Circuit Does Not Exist"
          }
        ],
        "hidden_cases": [
          {
            "input": "3 3\n0 1\n1 2\n2 0\n",
            "expected": "Euler Circuit Exists"
          },
          {
            "input": "4 3\n0 1\n1 2\n2 3\n",
            "expected": "Euler Circuit Does Not Exist"
          },
          {
            "input": "5 6\n0 1\n1 2\n2 0\n2 3\n3 4\n4 2\n",
            "expected": "Euler Circuit Exists"
          },
          {
            "input": "4 6\n0 1\n0 2\n0 3\n1 2\n1 3\n2 3\n",
            "expected": "Euler Circuit Does Not Exist"
          }
        ],
        "inFmt": "The first line contains two space-separated integers v and e, representing the number of junctions and streets.\n\nThe next e lines contain two integers a and b, representing an undirected street between junctions a and b.",
        "outFmt": "Print \"Euler Circuit Exists\" if every vertex has an even degree.\n\nOtherwise, print \"Euler Circuit Does Not Exist\".",
        "cons": "3 <= v <= 10\nv - 1 <= e <= v * (v - 1) / 2\n0 <= a, b < v\nThe graph is connected, with no self-loops or repeated streets."
      }
    ]
  },
  "u5": {
    "name": "Unit 5: Searching, Sorting & Hashing",
    "mcq": [
      {
        "id": "u5_m1",
        "q": "What does bubble sort do repeatedly in each pass?",
        "o": [
          "Selects the smallest element and moves it to the front",
          "Splits the array into two halves",
          "Inserts each element into a sorted portion",
          "Compares adjacent elements and swaps them if they are in the wrong order"
        ],
        "a": 3
      },
      {
        "id": "u5_m2",
        "q": "What does a hash function do in a hash table?",
        "o": [
          "Sorts the keys in ascending order",
          "Maps a key to an index in the table",
          "Encrypts the key with a secret password",
          "Counts the number of keys in the table"
        ],
        "a": 1
      },
      {
        "id": "u5_m3",
        "q": "What is done in each pass of selection sort?",
        "o": [
          "Adjacent elements are swapped until the array is sorted",
          "The minimum element of the unsorted part is placed at its correct position",
          "A pivot is chosen to partition the array",
          "The array is divided and the halves are merged"
        ],
        "a": 1
      },
      {
        "id": "u5_m4",
        "q": "What is the main idea of Shellsort?",
        "o": [
          "It always picks the last element as a pivot",
          "It merges two sorted halves of the array",
          "It sorts elements that are a gap apart and reduces the gap in each pass",
          "It repeatedly selects the maximum element"
        ],
        "a": 2
      },
      {
        "id": "u5_m5",
        "q": "When does quick sort take O(n²) time if the first element is always chosen as the pivot?",
        "o": [
          "When the array is in random order",
          "When the array has fewer than ten elements",
          "When the array has an even number of elements",
          "When the array is already sorted"
        ],
        "a": 3
      },
      {
        "id": "u5_m6",
        "q": "What is the worst-case time complexity of linear search on an array of n elements?",
        "o": [
          "O(1)",
          "O(n)",
          "O(log n)",
          "O(n²)"
        ],
        "a": 1
      },
      {
        "id": "u5_m7",
        "q": "Which condition must be satisfied before applying binary search on an array?",
        "o": [
          "The array must contain only positive numbers",
          "The array must have an even number of elements",
          "The array must be sorted",
          "The array must be stored in a linked list"
        ],
        "a": 2
      },
      {
        "id": "u5_m8",
        "q": "What is the best-case time complexity of insertion sort, which occurs when the array is already sorted?",
        "o": [
          "O(n)",
          "O(n²)",
          "O(log n)",
          "O(n log n)"
        ],
        "a": 0
      },
      {
        "id": "u5_m9",
        "q": "What is the worst-case time complexity of binary search on a sorted array of n elements?",
        "o": [
          "O(log n)",
          "O(n)",
          "O(n log n)",
          "O(1)"
        ],
        "a": 0
      },
      {
        "id": "u5_m10",
        "q": "What is the time complexity of merge sort in the best, average and worst cases?",
        "o": [
          "O(n log n)",
          "O(n²)",
          "O(log n)",
          "O(n)"
        ],
        "a": 0
      },
      {
        "id": "u5_m11",
        "q": "In extendible hashing, how is the bucket for a key located?",
        "o": [
          "By scanning every bucket in order",
          "By using the leading bits of the hash value to index a directory of bucket pointers",
          "By following a linked list from the head of the table",
          "By performing a binary search on the keys"
        ],
        "a": 1
      },
      {
        "id": "u5_m12",
        "q": "How does separate chaining resolve collisions?",
        "o": [
          "By searching for the next empty slot in the table",
          "By doubling the table size immediately",
          "By discarding the new key",
          "By keeping all keys that hash to the same index in a linked list"
        ],
        "a": 3
      },
      {
        "id": "u5_m13",
        "q": "What is a collision in hashing?",
        "o": [
          "A key that is not found in the table",
          "A table that has become completely empty",
          "Two different keys mapping to the same index",
          "A key that is deleted from the table"
        ],
        "a": 2
      },
      {
        "id": "u5_m14",
        "q": "How does open addressing resolve a collision?",
        "o": [
          "By probing for another free slot inside the table",
          "By storing the keys in linked lists outside the table",
          "By splitting a bucket and doubling a directory",
          "By sorting the colliding keys"
        ],
        "a": 0
      },
      {
        "id": "u5_m15",
        "q": "What is rehashing?",
        "o": [
          "Applying the hash function twice to every key",
          "Deleting all keys that collide",
          "Building a larger table and reinserting every key using the new table size",
          "Replacing the hash function with a sorting algorithm"
        ],
        "a": 2
      },
      {
        "id": "u5_m16",
        "q": "What is the output of the following C code, which prints the position of the key and the number of iterations taken?",
        "code": "#include <stdio.h>\nint main() {\n    int a[7] = {2, 5, 8, 12, 16, 23, 38};\n    int low = 0, high = 6, mid, key = 23, steps = 0, pos = -1;\n    while (low <= high) {\n        mid = (low + high) / 2;\n        steps++;\n        if (a[mid] == key) {\n            pos = mid;\n            break;\n        } else if (a[mid] < key)\n            low = mid + 1;\n        else\n            high = mid - 1;\n    }\n    printf(\"%d %d\", pos, steps);\n    return 0;\n}",
        "o": [
          "5 3",
          "3 2",
          "5 2",
          "6 2"
        ],
        "a": 2
      },
      {
        "id": "u5_m17",
        "q": "What is the output of the following C code, which performs one pass of bubble sort?",
        "code": "#include <stdio.h>\nint main() {\n    int a[5] = {5, 1, 4, 2, 8};\n    int i, t;\n    for (i = 0; i < 4; i++) {\n        if (a[i] > a[i + 1]) {\n            t = a[i];\n            a[i] = a[i + 1];\n            a[i + 1] = t;\n        }\n    }\n    for (i = 0; i < 5; i++)\n        printf(\"%d \", a[i]);\n    return 0;\n}",
        "o": [
          "1 2 4 5 8",
          "1 4 2 5 8",
          "5 1 4 2 8",
          "1 4 5 2 8"
        ],
        "a": 1
      },
      {
        "id": "u5_m18",
        "q": "What is the output of the following C code?",
        "code": "#include <stdio.h>\nint main() {\n    int a[5] = {4, 8, 15, 16, 23};\n    int key = 16, i, pos = -1;\n    for (i = 0; i < 5; i++) {\n        if (a[i] == key) {\n            pos = i;\n            break;\n        }\n    }\n    printf(\"%d %d\", pos, i + 1);\n    return 0;\n}",
        "o": [
          "4 3",
          "3 3",
          "4 4",
          "3 4"
        ],
        "a": 3
      },
      {
        "id": "u5_m19",
        "q": "What is the output of the following C code, which performs the first two passes of selection sort?",
        "code": "#include <stdio.h>\nint main() {\n    int a[5] = {64, 25, 12, 22, 11};\n    int i, j, min, t;\n    for (i = 0; i < 2; i++) {\n        min = i;\n        for (j = i + 1; j < 5; j++)\n            if (a[j] < a[min])\n                min = j;\n        t = a[i];\n        a[i] = a[min];\n        a[min] = t;\n    }\n    for (i = 0; i < 5; i++)\n        printf(\"%d \", a[i]);\n    return 0;\n}",
        "o": [
          "11 12 22 25 64",
          "11 25 12 22 64",
          "12 25 64 22 11",
          "11 12 25 22 64"
        ],
        "a": 3
      },
      {
        "id": "u5_m20",
        "q": "What is the output of the following C code, which inserts keys into a hash table using linear probing?",
        "code": "#include <stdio.h>\nint main() {\n    int t[5], keys[3] = {12, 22, 7};\n    int i, idx;\n    for (i = 0; i < 5; i++)\n        t[i] = -1;\n    for (i = 0; i < 3; i++) {\n        idx = keys[i] % 5;\n        while (t[idx] != -1)\n            idx = (idx + 1) % 5;\n        t[idx] = keys[i];\n    }\n    for (i = 0; i < 5; i++)\n        printf(\"%d \", t[i]);\n    return 0;\n}",
        "o": [
          "-1 -1 12 22 7",
          "12 22 7 -1 -1",
          "-1 -1 12 7 22",
          "7 -1 12 22 -1"
        ],
        "a": 0
      }
    ],
    "debug": [
      {
        "id": "u5_d1",
        "title": "Q1. Merge Step of Merge Sort",
        "ps": "Sneha has the sorted attendance lists of two lab batches and wants a single sorted list of all the students. This is the merge step of merge sort: compare the current elements of both lists, copy the smaller one to the result and move ahead in that list, and when one list is finished, copy all the remaining elements of the other list to the result.\n\nThe function mergeArrays() in the editable area is meant to merge the two arrays and return the number of elements in the result, but the code contains errors. Debug the code so that the program prints the expected output.",
        "inFmt": "The first line of input consists of an integer n1 representing the number of elements in the first list.\n\nThe second line of input consists of n1 space-separated integers representing the first sorted list.\n\nThe third line of input consists of an integer n2 representing the number of elements in the second list.\n\nThe fourth line of input consists of n2 space-separated integers representing the second sorted list.",
        "outFmt": "The first line of output prints \"Merged Array: \" followed by the elements of the merged sorted list separated by spaces.",
        "cons": "1 ≤ n1, n2 ≤ 50\n-1000 ≤ elements ≤ 1000",
        "sampleIn": "3\n1 3 9\n2\n2 4",
        "sampleOut": "Merged Array: 1 2 3 4 9",
        "header": "#include <stdio.h>",
        "buggy": "int mergeArrays(int a[], int n1, int b[], int n2,\n                int res[]) {\n  int i = 0, j = 0, k = 0;\n  while (i < n1 && j < n2)\n    if (a[i] > b[j])\n      res[k++] = a[i++];\n    else\n      res[k++] = b[j++];\n  return k;\n}",
        "footer": "int main() {\n  int n1, n2;\n  int a[105], b[105], res[205];\n  if (scanf(\"%d\", &n1) != 1) return 0;\n  for (int i = 0; i < n1; i++) scanf(\"%d\", &a[i]);\n  scanf(\"%d\", &n2);\n  for (int i = 0; i < n2; i++) scanf(\"%d\", &b[i]);\n  int total = mergeArrays(a, n1, b, n2, res);\n  printf(\"Merged Array:\");\n  for (int i = 0; i < total; i++) printf(\" %d\", res[i]);\n  printf(\"\\n\");\n  return 0;\n}",
        "samples": [
          {
            "input": "3\n1 3 9\n2\n2 4",
            "expected": "Merged Array: 1 2 3 4 9"
          },
          {
            "input": "3\n2 4 6\n2\n1 5",
            "expected": "Merged Array: 1 2 4 5 6"
          }
        ],
        "hidden_cases": [
          {
            "input": "3\n1 3 9\n2\n2 4",
            "expected": "Merged Array: 1 2 3 4 9"
          },
          {
            "input": "3\n2 4 6\n2\n1 5",
            "expected": "Merged Array: 1 2 4 5 6"
          },
          {
            "input": "1\n5\n1\n2",
            "expected": "Merged Array: 2 5"
          },
          {
            "input": "3\n1 2 3\n3\n4 5 6",
            "expected": "Merged Array: 1 2 3 4 5 6"
          },
          {
            "input": "2\n10 20\n2\n10 20",
            "expected": "Merged Array: 10 10 20 20"
          },
          {
            "input": "4\n-5 0 2 8\n2\n-10 5",
            "expected": "Merged Array: -10 -5 0 2 5 8"
          }
        ],
        "sol": "int mergeArrays(int a[], int n1, int b[], int n2,\n                int res[]) {\n  int i = 0, j = 0, k = 0;\n  while (i < n1 && j < n2)\n    if (a[i] <= b[j])\n      res[k++] = a[i++];\n    else\n      res[k++] = b[j++];\n  while (i < n1) {\n    res[k++] = a[i++];\n  }\n  while (j < n2) {\n    res[k++] = b[j++];\n  }\n  return k;\n}"
      },
      {
        "id": "u5_d2",
        "title": "Q2. Selection Sort",
        "ps": "Anitha is a teacher who wants to arrange the marks of her class in ascending order using selection sort. In each pass, selection sort scans the unsorted part of the list to find the minimum value, and then swaps that minimum value with the element at the beginning of the unsorted part.\n\nThe function selectionSort() in the editable area is meant to sort the marks in ascending order, but the code contains errors. Debug the code so that the program prints the expected output.",
        "inFmt": "The first line of input consists of an integer n representing the number of marks.\n\nThe second line of input consists of n space-separated integers representing the marks.",
        "outFmt": "The first line of output prints \"Sorted Array: \" followed by the marks sorted in ascending order separated by spaces.",
        "cons": "1 ≤ n ≤ 100\n1 ≤ marks[i] ≤ 1000",
        "sampleIn": "5\n9 3 7 1 5",
        "sampleOut": "Sorted Array: 1 3 5 7 9",
        "header": "#include <stdio.h>",
        "buggy": "void selectionSort(int a[], int n) {\n  for (int i = 0; i < n - 1; i++) {\n    int min = i;\n    for (int j = i + 1; j < n; j++) {\n      if (a[j] < a[i])\n        min = j;\n      int temp = a[i];\n      a[i] = a[min];\n      a[min] = temp;\n    }\n  }\n}",
        "footer": "int main() {\n  int n;\n  int a[105];\n  if (scanf(\"%d\", &n) != 1) return 0;\n  for (int i = 0; i < n; i++) scanf(\"%d\", &a[i]);\n  selectionSort(a, n);\n  printf(\"Sorted Array:\");\n  for (int i = 0; i < n; i++) printf(\" %d\", a[i]);\n  printf(\"\\n\");\n  return 0;\n}",
        "samples": [
          {
            "input": "5\n9 3 7 1 5",
            "expected": "Sorted Array: 1 3 5 7 9"
          },
          {
            "input": "3\n2 1 2",
            "expected": "Sorted Array: 1 2 2"
          }
        ],
        "hidden_cases": [
        {
          "input": "5\n9 31 52 15 76",
          "expected": "Sorted Array: 9 15 31 52 76"
        },
        {
          "input": "4\n61 0 6 45",
          "expected": "Sorted Array: 0 6 45 61"
        },
        {
          "input": "5\n9 49 72 13 74",
          "expected": "Sorted Array: 9 13 49 72 74"
        },
        {
          "input": "5\n16 58 1 31 52",
          "expected": "Sorted Array: 1 16 31 52 58"
        },
        {
          "input": "7\n82 49 25 75 18 63 32",
          "expected": "Sorted Array: 18 25 32 49 63 75 82"
        },
        {
          "input": "5\n47 6 93 2 50",
          "expected": "Sorted Array: 2 6 47 50 93"
        }
      ],
        "sol": "void selectionSort(int a[], int n) {\n  for (int i = 0; i < n - 1; i++) {\n    int min = i;\n    for (int j = i + 1; j < n; j++)\n      if (a[j] < a[min])\n        min = j;\n    int temp = a[i];\n    a[i] = a[min];\n    a[min] = temp;\n  }\n}"
      },
      {
        "id": "u5_d3",
        "title": "Q3. Linear Search with Comparison Counting",
        "ps": "Mohan is a lab assistant who looks for a student's registration number in an unsorted list by checking each element one by one from left to right. He wants to know whether the student is present and how many comparisons were needed to decide.\n\nThe function linearSearch() in the editable area is meant to print the result of the search along with the number of comparisons, but the code contains errors. Debug the code so that the program prints the expected output.",
        "inFmt": "The first line of input consists of an integer n representing the number of registration numbers.\n\nThe second line of input consists of n space-separated integers representing the registration numbers.\n\nThe third line of input consists of an integer key representing the registration number to search for.",
        "outFmt": "If the key is present, print \"Found at index \" followed by the 0-based index and \" after \" followed by the number of comparisons and \" comparisons\". If the key is not present, print \"Not Found after \" followed by the total number of comparisons and \" comparisons\".",
        "cons": "1 ≤ n ≤ 100\n1 ≤ registration numbers[i], key ≤ 10000",
        "sampleIn": "3\n10 20 30\n20",
        "sampleOut": "Found at index 1 after 2 comparisons",
        "header": "#include <stdio.h>",
        "buggy": "void linearSearch(int a[], int n, int key) {\n  int comps = 0;\n  for (int i = 0; i < n; i++) {\n    if (a[i] == key) {\n      printf(\"Found at index %d after %d comparisons\\n\", i,\n             comps);\n      return;\n    }\n    comps++;\n  }\n  printf(\"Not Found after %d comparisons\\n\", comps);\n}",
        "footer": "int main() {\n  int n, key;\n  int a[105];\n  if (scanf(\"%d\", &n) != 1) return 0;\n  for (int i = 0; i < n; i++) scanf(\"%d\", &a[i]);\n  scanf(\"%d\", &key);\n  linearSearch(a, n, key);\n  return 0;\n}",
        "samples": [
          {
            "input": "3\n10 20 30\n20",
            "expected": "Found at index 1 after 2 comparisons"
          },
          {
            "input": "4\n5 8 12 19\n15",
            "expected": "Not Found after 4 comparisons"
          }
        ],
        "hidden_cases": [
        {
          "input": "1\n60\n60",
          "expected": "Found at index 0 after 1 comparisons"
        },
        {
          "input": "4\n57 9 74 38\n57",
          "expected": "Found at index 0 after 1 comparisons"
        },
        {
          "input": "3\n6 13 29\n6",
          "expected": "Found at index 0 after 1 comparisons"
        },
        {
          "input": "1\n37\n37",
          "expected": "Found at index 0 after 1 comparisons"
        },
        {
          "input": "1\n30\n30",
          "expected": "Found at index 0 after 1 comparisons"
        },
        {
          "input": "2\n16 83\n16",
          "expected": "Found at index 0 after 1 comparisons"
        }
      ],
        "sol": "void linearSearch(int a[], int n, int key) {\n  int comps = 0;\n  for (int i = 0; i < n; i++) {\n    comps++;\n    if (a[i] == key) {\n      printf(\"Found at index %d after %d comparisons\\n\", i,\n             comps);\n      return;\n    }\n  }\n  printf(\"Not Found after %d comparisons\\n\", comps);\n}"
      },
      {
        "id": "u5_d4",
        "title": "Q4. Shell Sort",
        "ps": "Rakesh keeps the prices of the items in his shop in an array and wants to sort them in ascending order using Shell sort. Shell sort is a generalised insertion sort: it starts with a large gap gap = n / 2, sorts all sub-lists of elements separated by that gap, and then halves the gap in each step until gap = 1, where a final normal insertion sort finishes the ordering.\n\nThe function shellSort() in the editable area is meant to sort the prices in ascending order, but the code contains errors. Debug the code so that the program prints the expected output.",
        "inFmt": "The first line of input consists of an integer n representing the number of prices.\n\nThe second line of input consists of n space-separated integers representing the prices.",
        "outFmt": "The first line of output prints \"Sorted Array: \" followed by the prices in ascending order separated by spaces.",
        "cons": "1 ≤ n ≤ 100\n1 ≤ prices[i] ≤ 10000",
        "sampleIn": "4\n23 12 1 8",
        "sampleOut": "Sorted Array: 1 8 12 23",
        "header": "#include <stdio.h>",
        "buggy": "void shellSort(int a[], int n) {\n  for (int gap = n / 2; gap > 0; gap /= 2) {\n    for (int i = gap; i < n; i++) {\n      int temp = a[i];\n      int j;\n      for (j = i; j >= 0 && a[j - 1] > temp; j--)\n        a[j] = a[j - 1];\n      a[j] = temp;\n    }\n  }\n}",
        "footer": "int main() {\n  int n;\n  int a[105];\n  if (scanf(\"%d\", &n) != 1) return 0;\n  for (int i = 0; i < n; i++) scanf(\"%d\", &a[i]);\n  shellSort(a, n);\n  printf(\"Sorted Array:\");\n  for (int i = 0; i < n; i++) printf(\" %d\", a[i]);\n  printf(\"\\n\");\n  return 0;\n}",
        "samples": [
          {
            "input": "4\n23 12 1 8",
            "expected": "Sorted Array: 1 8 12 23"
          },
          {
            "input": "6\n9 8 3 7 5 6",
            "expected": "Sorted Array: 3 5 6 7 8 9"
          }
        ],
        "hidden_cases": [
        {
          "input": "4\n-61 -86 -7 -66",
          "expected": "Sorted Array: -86 -66 -61 -7"
        },
        {
          "input": "5\n-36 -76 -35 23 -113",
          "expected": "Sorted Array: -113 -76 -36 -35 23"
        },
        {
          "input": "4\n-1 58 -57 -3",
          "expected": "Sorted Array: -57 -3 -1 58"
        },
        {
          "input": "5\n46 -8 -63 -58 -104",
          "expected": "Sorted Array: -104 -63 -58 -8 46"
        },
        {
          "input": "5\n10 34 -62 47 -31",
          "expected": "Sorted Array: -62 -31 10 34 47"
        },
        {
          "input": "3\n-68 -65 -97",
          "expected": "Sorted Array: -97 -68 -65"
        }
      ],
        "sol": "void shellSort(int a[], int n) {\n  for (int gap = n / 2; gap > 0; gap /= 2) {\n    for (int i = gap; i < n; i++) {\n      int temp = a[i];\n      int j;\n      for (j = i; j >= gap && a[j - gap] > temp;\n           j -= gap) {\n        a[j] = a[j - gap];\n      }\n      a[j] = temp;\n    }\n  }\n}"
      },
      {
        "id": "u5_d5",
        "title": "Q5. Separate Chaining Hash Table",
        "ps": "Vimala maintains a lookup table of student IDs for a coaching centre. The table has m buckets numbered 0 to m - 1, and each bucket holds a linked list of IDs to handle collisions (separate chaining). The hash function maps an ID k to bucket k mod m.\n\nWhen a new ID is inserted, it is placed at the end of the linked list of its bucket. The functions insertKey() and printTable() in the editable area are meant to insert the IDs and print every bucket that contains at least one ID, but the code contains errors. Debug the code so that the program prints the expected output.",
        "inFmt": "The first line of input consists of two space-separated integers m and n representing the number of buckets and the number of IDs to insert. The second line of input consists of n space-separated integers representing the student IDs in insertion order.",
        "outFmt": "For each bucket from 0 to m - 1 that contains at least one ID, print \"Bucket \" followed by the bucket index, a colon, and the IDs in that bucket separated by spaces, one bucket per line.\n\nIf the table is completely empty, print nothing.",
        "cons": "1 ≤ m ≤ 50\n1 ≤ n ≤ 100\n0 ≤ student IDs[i] ≤ 10000",
        "sampleIn": "3 4\n1 4 7 2",
        "sampleOut": "Bucket 1: 1 4 7\nBucket 2: 2",
        "header": "#include <stdio.h>\n#include <stdlib.h>\nstruct Node {\n  int data;\n  struct Node *next;\n};\nstruct Node *table[55];",
        "buggy": "void insertKey(int m, int key) {\n  int idx = key % m;\n  struct Node *newNode =\n      (struct Node *)malloc(sizeof(struct Node));\n  newNode->data = key;\n  newNode->next = NULL;\n  table[idx] = newNode;\n}\nvoid printTable(int m) {\n  for (int i = 0; i < m; i++) {\n    printf(\"Bucket %d:\", i);\n    for (struct Node *curr = table[i]; curr != NULL;\n         curr = curr->next) {\n      printf(\" %d\", curr->data);\n    }\n    printf(\"\\n\");\n  }\n}",
        "footer": "int main() {\n  int m, n;\n  if (scanf(\"%d %d\", &m, &n) != 2) return 0;\n  for (int i = 0; i < m; i++) table[i] = NULL;\n  for (int i = 0; i < n; i++) {\n    int key;\n    scanf(\"%d\", &key);\n    insertKey(m, key);\n  }\n  printTable(m);\n  return 0;\n}",
        "samples": [
          {
            "input": "3 4\n1 4 7 2",
            "expected": "Bucket 1: 1 4 7\nBucket 2: 2"
          },
          {
            "input": "5 3\n5 10 15",
            "expected": "Bucket 0: 5 10 15"
          }
        ],
        "hidden_cases": [
          {
            "input": "3 4\n1 4 7 2",
            "expected": "Bucket 1: 1 4 7\nBucket 2: 2"
          },
          {
            "input": "5 3\n5 10 15",
            "expected": "Bucket 0: 5 10 15"
          },
          {
            "input": "4 2\n0 2",
            "expected": "Bucket 0: 0\nBucket 2: 2"
          },
          {
            "input": "1 3\n10 20 30",
            "expected": "Bucket 0: 10 20 30"
          },
          {
            "input": "5 4\n1 2 3 4",
            "expected": "Bucket 1: 1\nBucket 2: 2\nBucket 3: 3\nBucket 4: 4"
          },
          {
            "input": "3 3\n6 9 12",
            "expected": "Bucket 0: 6 9 12"
          }
        ],
        "sol": "void insertKey(int m, int key) {\n  int idx = key % m;\n  struct Node *newNode =\n      (struct Node *)malloc(sizeof(struct Node));\n  newNode->data = key;\n  newNode->next = NULL;\n  if (table[idx] == NULL) {\n    table[idx] = newNode;\n  } else {\n    struct Node *curr = table[idx];\n    while (curr->next != NULL) {\n      curr = curr->next;\n    }\n    curr->next = newNode;\n  }\n}\nvoid printTable(int m) {\n  for (int i = 0; i < m; i++) {\n    if (table[i] != NULL) {\n      printf(\"Bucket %d:\", i);\n      for (struct Node *curr = table[i]; curr != NULL;\n           curr = curr->next) {\n        printf(\" %d\", curr->data);\n      }\n      printf(\"\\n\");\n    }\n  }\n}"
      }],
    "cod": [
      {
        "id": "u5_c1",
        "title": "Q1. BINARY SEARCH ON SORTED ARRAY",
        "ps": "Mohan is a lab assistant who keeps the roll numbers of the students present in a practical session in a sorted list. To find a particular student quickly, he does not want to check every roll number one by one, but wants to use binary search, which repeatedly halves the part of the list that can still contain the key.\n\nWrite a program that reads the sorted roll numbers and a key, and finds the position of the key using binary search. Keep two indices low and high, starting at 0 and n - 1, and compute the middle index as mid = low + (high - low) / 2 using integer division. If the middle element equals the key you are done, if it is smaller continue in the right half, and otherwise continue in the left half.",
        "sampleIn": "5\n3 6 9 12 15\n12",
        "sampleOut": "Found at index 3",
        "hidden": [
          {
            "input": "5\n3 6 9 12 15\n12\n",
            "expected": "Found at index 3"
          },
          {
            "input": "4\n10 20 30 40\n25\n",
            "expected": "Not Found"
          },
          {
            "input": "1\n5\n5\n",
            "expected": "Found at index 0"
          },
          {
            "input": "6\n2 4 6 8 10 12\n2\n",
            "expected": "Found at index 0"
          },
          {
            "input": "6\n2 4 6 8 10 12\n12\n",
            "expected": "Found at index 5"
          },
          {
            "input": "7\n1 3 5 7 9 11 13\n8\n",
            "expected": "Not Found"
          }
        ],
        "sol": "#include <stdio.h>\nint main() {\n    int n, key;\n    int a[105];\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) scanf(\"%d\", &a[i]);\n    scanf(\"%d\", &key);\n    int low = 0, high = n - 1, found = -1;\n    while (low <= high) {\n        int mid = low + (high - low) / 2;\n        if (a[mid] == key) {\n            found = mid;\n            break;\n        } else if (a[mid] < key) low = mid + 1;\n        else high = mid - 1;\n    }\n    if (found == -1) printf(\"Not Found\\n\");\n    else printf(\"Found at index %d\\n\", found);\n    return 0;\n}",
        "samples": [
          {
            "input": "5\n3 6 9 12 15\n12",
            "expected": "Found at index 3"
          },
          {
            "input": "4\n10 20 30 40\n25",
            "expected": "Not Found"
          }
        ],
        "hidden_cases": [
          {
            "input": "1\n5\n5\n",
            "expected": "Found at index 0"
          },
          {
            "input": "6\n2 4 6 8 10 12\n2\n",
            "expected": "Found at index 0"
          },
          {
            "input": "6\n2 4 6 8 10 12\n12\n",
            "expected": "Found at index 5"
          },
          {
            "input": "7\n1 3 5 7 9 11 13\n8\n",
            "expected": "Not Found"
          }
        ],
        "inFmt": "The first line of input consists of an integer n representing the number of roll numbers.\n\nThe second line of input consists of n space-separated integers representing the roll numbers in ascending order.\n\nThe third line of input consists of an integer key representing the roll number to search for.",
        "outFmt": "If the key is present, the first line of output prints \"Found at index \" followed by the index of the key, where the first element has index 0.\n\nIf the key is not present, the first line of output prints the string \"Not Found\".\n\nRefer to the sample output for the formatting specifications.",
        "cons": "1 ≤ n ≤ 100\n1 ≤ roll numbers[i], key ≤ 10000\nThe roll numbers are distinct and given in ascending order."
      },
      {
        "id": "u5_c2",
        "title": "Q2. BUBBLE SORT WITH SWAP COUNT",
        "ps": "Pooja is a teacher who wants to show her class how much work bubble sort does on a list of exam marks. Bubble sort makes repeated passes over the list. In every pass it compares each pair of neighbouring marks and swaps them when the left mark is greater than the right mark, so that the largest remaining mark moves to the end of the unsorted part.\n\nWrite a program that sorts the marks in ascending order using bubble sort, counts the total number of swaps performed while sorting, and prints the count along with the sorted marks.",
        "sampleIn": "5\n3 2 5 1 4",
        "sampleOut": "Total Swaps: 5\nSorted Array: 1 2 3 4 5",
        "hidden": [
          {
            "input": "5\n3 2 5 1 4\n",
            "expected": "Total Swaps: 5\nSorted Array: 1 2 3 4 5"
          },
          {
            "input": "3\n9 7 8\n",
            "expected": "Total Swaps: 2\nSorted Array: 7 8 9"
          },
          {
            "input": "4\n1 2 3 4\n",
            "expected": "Total Swaps: 0\nSorted Array: 1 2 3 4"
          },
          {
            "input": "4\n4 3 2 1\n",
            "expected": "Total Swaps: 6\nSorted Array: 1 2 3 4"
          },
          {
            "input": "1\n10\n",
            "expected": "Total Swaps: 0\nSorted Array: 10"
          },
          {
            "input": "6\n5 1 4 2 8 3\n",
            "expected": "Total Swaps: 7\nSorted Array: 1 2 3 4 5 8"
          }
        ],
        "sol": "#include <stdio.h>\nint main() {\n    int n;\n    int a[105];\n    int swaps = 0;\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) scanf(\"%d\", &a[i]);\n    for (int i = 0; i < n - 1; i++) {\n        for (int j = 0; j < n - i - 1; j++) {\n            if (a[j] > a[j + 1]) {\n                int temp = a[j];\n                a[j] = a[j + 1];\n                a[j + 1] = temp;\n                swaps++;\n            }\n        }\n    }\n    printf(\"Total Swaps: %d\\n\", swaps);\n    printf(\"Sorted Array:\");\n    for (int i = 0; i < n; i++) printf(\" %d\", a[i]);\n    printf(\"\\n\");\n    return 0;\n}",
        "samples": [
          {
            "input": "5\n3 2 5 1 4",
            "expected": "Total Swaps: 5\nSorted Array: 1 2 3 4 5"
          },
          {
            "input": "3\n9 7 8",
            "expected": "Total Swaps: 2\nSorted Array: 7 8 9"
          }
        ],
        "hidden_cases": [
          {
            "input": "4\n1 2 3 4\n",
            "expected": "Total Swaps: 0\nSorted Array: 1 2 3 4"
          },
          {
            "input": "4\n4 3 2 1\n",
            "expected": "Total Swaps: 6\nSorted Array: 1 2 3 4"
          },
          {
            "input": "1\n10\n",
            "expected": "Total Swaps: 0\nSorted Array: 10"
          },
          {
            "input": "6\n5 1 4 2 8 3\n",
            "expected": "Total Swaps: 7\nSorted Array: 1 2 3 4 5 8"
          }
        ],
        "inFmt": "The first line of input consists of an integer n representing the number of marks.\n\nThe second line of input consists of n space-separated integers representing the marks.",
        "outFmt": "The first line of output prints \"Total Swaps: \" followed by an integer representing the number of swaps performed.\n\nThe second line of output prints \"Sorted Array: \" followed by the marks in ascending order separated by spaces.\n\nRefer to the sample output for the formatting specifications.",
        "cons": "1 ≤ n ≤ 100\n1 ≤ marks[i] ≤ 1000"
      },
      {
        "id": "u5_c3",
        "title": "Q3. QUICK SORT SINGLE PARTITION STEP",
        "ps": "Rakesh is studying quick sort and wants to see exactly what the first partition step does to a list of product prices. In quick sort, one element is chosen as the pivot and the list is rearranged so that the pivot reaches its final sorted position, with smaller or equal elements before it and larger elements after it.\n\nWrite a program that performs a single partition step using the last element as the pivot. Keep an index i starting at -1, and for every index j from 0 to n - 2, if a[j] is less than or equal to the pivot, increase i by one and swap a[i] with a[j]. After the loop, swap a[i + 1] with the last element, so the pivot ends at index i + 1. Print the pivot index and the rearranged array.",
        "sampleIn": "5\n7 2 9 4 5",
        "sampleOut": "Pivot Index: 2\nArray After Partition: 2 4 5 7 9",
        "hidden": [
          {
            "input": "5\n7 2 9 4 5\n",
            "expected": "Pivot Index: 2\nArray After Partition: 2 4 5 7 9"
          },
          {
            "input": "4\n3 8 1 6\n",
            "expected": "Pivot Index: 2\nArray After Partition: 3 1 6 8"
          },
          {
            "input": "4\n1 2 3 4\n",
            "expected": "Pivot Index: 3\nArray After Partition: 1 2 3 4"
          },
          {
            "input": "4\n4 3 2 1\n",
            "expected": "Pivot Index: 0\nArray After Partition: 1 3 2 4"
          },
          {
            "input": "1\n5\n",
            "expected": "Pivot Index: 0\nArray After Partition: 5"
          },
          {
            "input": "6\n9 7 5 11 12 2\n",
            "expected": "Pivot Index: 0\nArray After Partition: 2 7 5 11 12 9"
          }
        ],
        "sol": "#include <stdio.h>\nint main() {\n    int n;\n    int a[105];\n    scanf(\"%d\", &n);\n    for (int i = 0; i < n; i++) scanf(\"%d\", &a[i]);\n    int pivot = a[n - 1];\n    int i = -1;\n    for (int j = 0; j < n - 1; j++) {\n        if (a[j] <= pivot) {\n            i++;\n            int temp = a[i];\n            a[i] = a[j];\n            a[j] = temp;\n        }\n    }\n    int temp = a[i + 1];\n    a[i + 1] = a[n - 1];\n    a[n - 1] = temp;\n    printf(\"Pivot Index: %d\\n\", i + 1);\n    printf(\"Array After Partition:\");\n    for (int k = 0; k < n; k++) printf(\" %d\", a[k]);\n    printf(\"\\n\");\n    return 0;\n}",
        "samples": [
          {
            "input": "5\n7 2 9 4 5",
            "expected": "Pivot Index: 2\nArray After Partition: 2 4 5 7 9"
          },
          {
            "input": "4\n3 8 1 6",
            "expected": "Pivot Index: 2\nArray After Partition: 3 1 6 8"
          }
        ],
        "hidden_cases": [
          {
            "input": "4\n1 2 3 4\n",
            "expected": "Pivot Index: 3\nArray After Partition: 1 2 3 4"
          },
          {
            "input": "4\n4 3 2 1\n",
            "expected": "Pivot Index: 0\nArray After Partition: 1 3 2 4"
          },
          {
            "input": "1\n5\n",
            "expected": "Pivot Index: 0\nArray After Partition: 5"
          },
          {
            "input": "6\n9 7 5 11 12 2\n",
            "expected": "Pivot Index: 0\nArray After Partition: 2 7 5 11 12 9"
          }
        ],
        "inFmt": "The first line of input consists of an integer n representing the number of prices.\n\nThe second line of input consists of n space-separated integers representing the prices.",
        "outFmt": "The first line of output prints \"Pivot Index: \" followed by an integer representing the final index of the pivot.\n\nThe second line of output prints \"Array After Partition: \" followed by the elements of the rearranged array separated by spaces.\n\nRefer to the sample output for the formatting specifications.",
        "cons": "1 ≤ n ≤ 100\n1 ≤ prices[i] ≤ 1000"
      },
      {
        "id": "u5_c4",
        "title": "Q4. HASH TABLE WITH LINEAR PROBING",
        "ps": "Vimal is building a quick lookup table for the student IDs of a coaching centre. The table is an array with m slots numbered 0 to m - 1, and every empty slot holds the value -1. The hash function maps an ID k to the slot k mod m, where mod is the remainder after division.\n\nWhen the slot given by the hash function is already occupied, open addressing with linear probing is used: try the next slot (index + 1) mod m, then the one after that, and so on until an empty slot is found. Write a program that inserts the given IDs into the table in the given order and prints the final table.",
        "sampleIn": "10 4\n21 31 41 11",
        "sampleOut": "Hash Table: -1 21 31 41 11 -1 -1 -1 -1 -1",
        "hidden": [
          {
            "input": "10 4\n21 31 41 11\n",
            "expected": "Hash Table: -1 21 31 41 11 -1 -1 -1 -1 -1"
          },
          {
            "input": "5 3\n7 12 3\n",
            "expected": "Hash Table: -1 -1 7 12 3"
          },
          {
            "input": "5 5\n0 5 10 15 20\n",
            "expected": "Hash Table: 0 5 10 15 20"
          },
          {
            "input": "4 2\n3 7\n",
            "expected": "Hash Table: 7 -1 -1 3"
          },
          {
            "input": "6 3\n1 7 13\n",
            "expected": "Hash Table: -1 1 7 13 -1 -1"
          },
          {
            "input": "3 1\n5\n",
            "expected": "Hash Table: -1 -1 5"
          }
        ],
        "sol": "#include <stdio.h>\nint main() {\n    int m, n;\n    int table[105];\n    scanf(\"%d %d\", &m, &n);\n    for (int i = 0; i < m; i++) table[i] = -1;\n    for (int i = 0; i < n; i++) {\n        int key;\n        scanf(\"%d\", &key);\n        int idx = key % m;\n        while (table[idx] != -1) idx = (idx + 1) % m;\n        table[idx] = key;\n    }\n    printf(\"Hash Table:\");\n    for (int i = 0; i < m; i++) printf(\" %d\", table[i]);\n    printf(\"\\n\");\n    return 0;\n}",
        "samples": [
          {
            "input": "10 4\n21 31 41 11",
            "expected": "Hash Table: -1 21 31 41 11 -1 -1 -1 -1 -1"
          },
          {
            "input": "5 3\n7 12 3",
            "expected": "Hash Table: -1 -1 7 12 3"
          }
        ],
        "hidden_cases": [
          {
            "input": "5 5\n0 5 10 15 20\n",
            "expected": "Hash Table: 0 5 10 15 20"
          },
          {
            "input": "4 2\n3 7\n",
            "expected": "Hash Table: 7 -1 -1 3"
          },
          {
            "input": "6 3\n1 7 13\n",
            "expected": "Hash Table: -1 1 7 13 -1 -1"
          },
          {
            "input": "3 1\n5\n",
            "expected": "Hash Table: -1 -1 5"
          }
        ],
        "inFmt": "The first line of input consists of two space-separated integers m and n representing the number of slots in the table and the number of IDs to insert.\n\nThe second line of input consists of n space-separated integers representing the student IDs in the order they are inserted.",
        "outFmt": "The first line of output prints \"Hash Table: \" followed by the m slot values from slot 0 to slot m - 1 separated by spaces, using -1 for an empty slot.\n\nRefer to the sample output for the formatting specifications.",
        "cons": "1 ≤ m ≤ 100\n1 ≤ n ≤ m\n0 ≤ student IDs[i] ≤ 10000\nAll student IDs are distinct."
      }
    ]
  }
};
