    <script lang="ts"  setup>
    import { ref } from 'vue'
    import type {Column, Task } from "~~/types"
    import { nanoid } from 'nanoid'
    import draggable from 'vuedraggable'
    const columns = ref<Column[]>([
      {
        id: nanoid(),
        title: "Backlog",
        tasks: [
          {
            id: nanoid(), title: "Create a new project",createdAt: new Date()
          }
        ]

      },
      {
        id: nanoid(),
        title: "Financials",
        tasks: [
          {
            id: nanoid(), title: "Create account on Carlos software",createdAt: new Date()
          },
          {
            id: nanoid(), title: "Create categories", createdAt: new Date()
          },
          {
            id: nanoid(), title: "Create Centers of cost", createdAt: new Date()
          },
          {
            id: nanoid(), title: "Study the system", createdAt: new Date()
          }
        ]

      }
    ])

const alt = useKeyModifier("Alt")
    </script>
<template>
<div  >
  <draggable
  v-model="columns"
  group="columns"
  handle=".drag-handle"
  item-key="id"
  animation="150"
  class="flex gap-4 overflow-x-auto items-start"
  >
  <template #item="{element: column}: {element: Column}" >
    <div  class="bg-gray-200 p-5 rounded min-w-[250px]">
      <header class="font-bold mb-4">
        <DragHandle />
        {{column.title}}
      </header>
      <draggable
        v-model="column.tasks"
        :group="{name: 'tasks', pull: alt ? 'clone' : true}"
        item-key="id"
        animation="150"
        handle=".drag-handle"

      >
        <template #item="{element: task}: {element: Task}" >
          <div>
            <TrelloBoardTask :task="task"  />
          </div>

        </template>
      </draggable>

      <footer>
        <button class="text-gray-500"> + Add a Card</button>
      </footer>
    </div>
  </template>
  </draggable>

  </div>


</template>


