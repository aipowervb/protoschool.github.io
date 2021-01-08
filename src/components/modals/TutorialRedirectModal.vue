<template>
  <portal to="modal" v-if="show">
    <div class="modal-overlay"></div>
    <div class="modal">
      <div class="modal-content pa4">
        <div class="f2 b mb4 lh-title">{{translations.title}}</div>
        <p class="f4 lh-copy">{{translations.body}}</p>
        <div class="buttons flex justify-end mt5">
          <ButtonLink
            class="mr3"
            :onClick="close"
            :text="translations.actions.start"
          />
          <Button
            :click="close"
            :text="translations.actions.stay"
          />
        </div>
        <ButtonClose
          title="Close modal and continue to view lesson"
          :onDismiss="close"
        />
      </div>
    </div>
  </portal>
</template>

<script>
import translations from '../../static/translations'
import Button from '../buttons/Button'
import ButtonLink from '../buttons/ButtonLink'
import ButtonClose from '../buttons/ButtonClose'
import { isLessonPassed } from '../../utils/tutorials'

export default {
  name: 'TutorialRedirectModal',
  components: {
    Button,
    ButtonLink,
    ButtonClose
  },
  props: {
    tutorial: Object,
    lesson: Object
  },
  computed: {
    translations: function () {
      return translations.modals.tutorialRedirect
    }
  },
  data: function () {
    return {
      show:
        typeof document !== 'undefined' && // not available in prerender
        document.referrer && !document.referrer.includes(location.hostname) &&
        this.lesson.id !== 1 &&
        this.lesson.type !== 'resources' &&
        !isLessonPassed(this.tutorial, this.lesson)
    }
  },
  methods: {
    close () {
      this.show = false
    }
  }
}
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: var(--color-navy);
  opacity: 0.9;
}

.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  position: relative;
  min-width: 16rem;
  max-width: 40vw;
  min-height: 16rem;

  background: var(--color-snow-muted);
  border-radius: var(--border-radius-default);
}
</style>
