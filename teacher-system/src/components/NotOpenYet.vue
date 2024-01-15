<script setup>
import { defineProps, ref, defineEmits } from "vue";

const { isModalOpen } = defineProps(["isModalOpen"]);
import { useRouter } from "vue-router";

const router = useRouter();

const emit = defineEmits();

const closeNotes = () => {
  router.back();
};
</script>

<template>
  <div
    v-if="isModalOpen"
    class="fixed inset-0 flex h-full w-full items-center justify-center bg-black/40"
  >
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
