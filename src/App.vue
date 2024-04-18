<script>
import functions from "./functions.js";
import { store } from "./store.js"
export default {

  created() {
    this.switchContact = functions.switchContact;
    this.newMessage = functions.newMessage;
    this.replyMessage = functions.replyMessage;
    this.searchChat = functions.searchChat;
    this.deleteMessage = functions.deleteMessage;
    this.getLastMex = functions.getLastMex;
    this.getLastDataTime = functions.getLastDataTime;
    this.checkMex = functions.checkMex;
    this.now = functions.now;
    this.changeData = functions.changeData;
    this.keepDraftMessages = functions.keepDraftMessages;

  },
  data() {
    return {
      store,
      contacts: [
        {
          name: 'Michele',
          avatar: ' src/assets/img/avatar_1.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Hai portato a spasso il cane?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Ricordati di stendere i panni',
              status: 'sent'
            },
            {
              date: '10/01/2020 16:15:22',
              message: 'Tutto fatto!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Fabio',
          avatar: ' src/assets/img/avatar_2.jpg',
          visible: true,
          messages: [
            {
              date: '20/03/2020 16:30:00',
              message: 'Ciao come stai?',
              status: 'sent'
            },
            {
              date: '20/03/2020 16:30:55',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received'
            },
            {
              date: '20/03/2020 16:35:00',
              message: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Samuele',
          avatar: ' src/assets/img/avatar_3.jpg',
          visible: true,
          messages: [
            {
              date: '28/03/2020 10:10:40',
              message: 'La Marianna va in campagna',
              status: 'received'
            },
            {
              date: '28/03/2020 10:20:10',
              message: 'Sicuro di non aver sbagliato chat?',
              status: 'sent'
            },
            {
              date: '28/03/2020 16:15:22',
              message: 'Ah scusa!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Alessandro B.',
          avatar: ' src/assets/img/avatar_4.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Si, ma preferirei andare al cinema',
              status: 'received'
            }
          ],
        },
        {
          name: 'Alessandro L.',
          avatar: ' src/assets/img/avatar_5.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ricordati di chiamare la nonna',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Va bene, stasera la sento',
              status: 'received'
            }
          ],
        },
        {
          name: 'Claudia',
          avatar: ' src/assets/img/avatar_6.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao Claudia, hai novità?',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Non ancora',
              status: 'received'
            },
            {
              date: '10/01/2020 15:51:00',
              message: 'Nessuna nuova, buona nuova',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Federico',
          avatar: ' src/assets/img/avatar_7.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Fai gli auguri a Martina che è il suo compleanno!',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'Grazie per avermelo ricordato, le scrivo subito!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Davide',
          avatar: 'src/assets/img/avatar_8.jpg',
          visible: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
              message: 'Ciao, andiamo a mangiare la pizza stasera?',
              status: 'received'
            },
            {
              date: '10/01/2020 15:50:00',
              message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
              status: 'sent'
            },
            {
              date: '10/01/2020 15:51:00',
              message: 'OK!!',
              status: 'received'
            }
          ],
        }
      ],
      posizioneOggetto: 0,
      lastMex: [],
      lastData: [],
      lastDay: [],
      emptyChat: [],
      dataCorrente: "",
      oraCorrente: ""
    }
  },
  mounted() {
    this.changeData()
    this.getLastMex()
    this.getLastDataTime()
    this.checkMex()
    this.now()
  }
}
</script>

<template>


  <div class="container finestra">

    <!-- header app -->
    <div id="headRow" class="row">
      <div class="col-4 d-flex align-items-center justify-content-between">

        <!-- prifile pic + name -->
        <div class="d-flex h-100 align-items-center">
          <img src="/src/assets/img/avatar_io.jpg" alt="" class="rounded-circle contactImg">
          <div class="fw-medium">Sofia</div>


        </div>
        <div class="d-flex align-items-center gap-3 headerIcon">
          <a href=""><font-awesome-icon icon="circle-notch" size="lg" /></a>
          <a href=""><font-awesome-icon icon="message" size="lg" /></a>
          <a href=""><font-awesome-icon icon="ellipsis-vertical" size="lg" /></a>
        </div>
      </div>

      <!-- header selected chat -->
      <div class="col-8 d-flex justify-content-between">
        <div class="selectedContact d-flex align-items-center">
          <!-- selected pic -->
          <img :src=contacts[posizioneOggetto].avatar alt="" class="rounded-circle contactImg">
          <!-- selected contact -->
          <div>
            <p class="fw-medium">{{ contacts[posizioneOggetto].name }}</p>
            <p class="subText">ultimo accesso il {{ lastDay[posizioneOggetto] }} alle {{ lastData[posizioneOggetto] }}
            </p>
          </div>
        </div>
        <div class="d-flex align-items-center gap-3 headerIcon">
          <a href=""><font-awesome-icon icon="magnifying-glass" size="lg" /></a>
          <a href=""><font-awesome-icon icon="paperclip" size="lg" /></a>
          <a href=""><font-awesome-icon icon="ellipsis-vertical" size="lg" /></a>
        </div>
      </div>

    </div>

    <!---------------------------------- sezione principale app ------------------------------------->
    <div id="mainRow" class="row">

      <!----------------- sezione laterale contatti ------------->
      <div id="side" class="col-4 h-100 p-0 bg-white">

        <!-- disable notification -->
        <div id="silentNotif" class="d-flex">
          <div id="silentIcon" class="rounded-circle bg-white align-items-center justify-content-center d-flex">
            <font-awesome-icon icon="bell-slash" />
          </div>
          <div class="ms-3">
            <p class="fw-medium">Ricevi notifiche di nuovi messaggi</p>
            <a href="" class="fw-light text-black">attiva notifiche desktop</a>
          </div>
        </div>

        <!-- searchbar -->
        <div id="searchBar" class="input-group">
          <span id="inputGroupText" class="input-group-text rounded-0"><i
              class="fa-solid fa-magnifying-glass"></i></span>
          <div class="form-floating">
            <input type="text" class="form-control rounded-0" id="floatingInputGroup1"
              placeholder="Cerca o inizia una nuova chat" @input="searchChat()">
            <label for="floatingInputGroup1">Cerca o inizia una nuova chat</label>
          </div>
        </div>

        <!-- SIDE chat container -->
        <div id="chatContainer" class="overflow-auto">
          <!-- seleziona il contatto da mostrare nel main al click -->
          <div @click="switchContact(i)" v-for="(element, i) in contacts">
            <div v-if="contacts[i].visible" class="contact d-flex justify-content-between"
              :class="(posizioneOggetto == i) ? 'selected' : ''">
              <div class="d-flex">
                <!-- pro pic -->
                <img :src=contacts[i].avatar alt="" class="rounded-circle contactImg">
                <div>
                  <!-- nome contatto -->
                  <p class="fw-medium">{{ contacts[i].name }}</p>
                  <!-- ultimo messaggio -->
                  <p v-if="emptyChat[i]" class="subText">{{ lastMex[i] }}</p>
                </div>
                <!-- data ultimo messaggio w/ container -->
              </div>
              <p class="data p-2 align-self-start">{{ lastData[i] }}</p>
            </div>
          </div>
        </div>
      </div>

      <!--------------------------------- main section ------------------------------->
      <div id="main" class="col-8 d-flex flex-column justify-content-between h-100 p-0">
        <!-- container chat -->
        <div id="chatBox" class="d-flex flex-column gap-3 overflow-auto">
          <!-- chat singole -->

          <!-- SE il primo messaggio della chat è nullo non mostrarmi la chat -->
          <template v-if="emptyChat[posizioneOggetto]">

            <div class="mex rounded d-flex justify-content-between px-2 py-2"
              :class="(contacts[posizioneOggetto].messages[i].status == 'sent') ? 'mexSent' : 'mexRecived'"
              v-for="(element, i) in contacts[posizioneOggetto].messages">
              <!-- messaggio -->
              <p>{{ contacts[posizioneOggetto].messages[i].message }}</p>
              <div class="d-flex gap-3">

                <!-- data -->
                <div class="data align-self-end ms-3">{{ contacts[posizioneOggetto].messages[i].time }}</div>

                <!-- DROPDOWN -->
                <div class="dropdown">
                  <button id="btnDrop" class="btn d-flex align-items-center p-0 border-0" type="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <font-awesome-icon icon="chevron-down" size="xs" />
                  </button>
                  <ul class="dropdown-menu dropdown-menu-end">
                    <li><a class="dropdown-item" href="#" @click="deleteMessage(i, posizioneOggetto)">Delete
                        message</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </template>
        </div>
        <!-- input chat -->
        <div id="inputBox" class="d-flex p-2">
          <div class="iconBox"><a href=""><font-awesome-icon icon="face-smile" size="2x" /></a></div>
          <div class="form-floating w-100">

            <!-- barra messaggio -->
            <input @keyup.enter="newMessage(posizioneOggetto)" type="text" class="form-control rounded-0"
              id="floatingInput" placeholder="name@example.com" @input="this.keepDraftMessages(posizioneOggetto)">
            <label for="floatingInput">Scrivi un messaggio</label>
          </div>

          <div class="iconBox"><a href=""><font-awesome-icon icon="microphone" size="2x" /></a></div>
        </div>

      </div>



    </div>
  </div>

</template>

<style scoped></style>
<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use './styles/general.scss';
</style>